import Base from './Base';
import Board from './Board'
import Player from './Player'
import ParameterValidation from './validation/ParameterValidation.js'
import WinnerChecker from './WinnerChecker'
import GameSetting from './GameSetting'
import _ from 'underscore'

export default class Game extends Base {

  constructor(gameSetting) {
    super()
    gameSetting = gameSetting || new GameSetting()
    ParameterValidation.validateType(gameSetting, GameSetting, 'gameSetting')
    this._board = new Board(gameSetting)
    this._players = []
    this._winnerCheckers = {}
    this._nextTurn = ''
    this._gameSetting = gameSetting;
  }

  get numOfPlayers() {
    return this._gameSetting.numberOfPlayers;
  }

  get playerCount() {
    return this._players.length
  }

  get fieldsToWin() {
    return this._gameSetting.fieldsToWin;
  }

  get board() {
    return this._board
  }

  addPlayer(player) {
    ParameterValidation.validateType(player, Player, 'player')
    let playerExists = !_.isUndefined(this.getPlayer(player.id))
    if (playerExists) {
      console.warn(`Player ${player.name} is already in the game.`)
      return
    }
    this._validatePlayerCount()
    player.game = this
    this._players.push(player)
    this._winnerCheckers[player.id] = new WinnerChecker(this._board, player.id, this.fieldsToWin)
  }

  getPlayer(playerId) {
    return _.findWhere(this._players, {id: playerId});
  }

  _validatePlayerCount() {
    let playersCapped = this.playerCount >= this.numOfPlayers
    if (playersCapped) {
      throw new RangeError('Game is full.')
    }
  }

  play(playerId, x, y) {
    this._validateHasAllPlayers()
    this._validateTurn(playerId)
    try {
      this._board.play(playerId, x, y)
    } catch (e) {
      this._undoTurn()
      throw e
    }
    this._checkWinners(playerId, x, y)
    this._checkDraw()
  }

  _validateHasAllPlayers() {
    let playersCapped = this.playerCount >= this.numOfPlayers
    if (!playersCapped) {
      throw new RangeError('Game cannot start without all players.')
    }
  }

  _validateTurn(id) {
    if (this.firstTurn() || this._nextTurn === id) {
      let playerPosition = _.findIndex(this._players, {id: id})
      let nextPlayerPosition = (playerPosition + 1) % this._gameSetting.numberOfPlayers
      this._nextTurn = this._players[nextPlayerPosition].id
    } else {
      throw new Error(`This is turn of ${this._nextTurn}`)
    }
  }

  _undoTurn() {
    let playerPosition = _.findIndex(this._players, {id: this._nextTurn})
    let nextPlayerPosition = (playerPosition - 1) % this._gameSetting.numberOfPlayers
    if (nextPlayerPosition < 0) {
      nextPlayerPosition += this._gameSetting.numberOfPlayers
    }
    this._nextTurn = this._players[nextPlayerPosition].id
  }

  firstTurn() {
    return this._nextTurn === ''
  }

  _checkWinners(playerId, x, y) {
    let winnerListenerExists = !_.isUndefined(this._onWinnerListener)
    if (this._winnerCheckers[playerId].checkWinner(x, y) && winnerListenerExists) {
      this._onWinnerListener(this.getPlayer(playerId))
      this._finished = true
    } else if (!winnerListenerExists) {
      console.warn('There is no onWinnerListener attached.')
    }
  }

  _checkDraw() {
    let noWinners = !(this._finished === true)
    let winnerListenerExists = !_.isUndefined(this._onWinnerListener)
    if (noWinners) {
      let board = this._board
      let maxPlays = board.height * board.width
      let playsCount = board.count
      let isDraw = playsCount === maxPlays
      if (isDraw && winnerListenerExists) {
        this._onWinnerListener(null)
      } else if (!winnerListenerExists) {
        console.warn('There is no onWinnerListener attached.')
      }
    }
  }

  set onWinnerListener(listener) {
    this._onWinnerListener = listener
  }

}
