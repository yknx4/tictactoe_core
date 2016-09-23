import Base from './Base';
import Board from './Board'
import Player from './Player'
import ParameterValidation from './validation/ParameterValidation.js'
import WinnerChecker from './WinnerChecker'
import _ from 'underscore'

export default class Game extends Base {

  constructor(boardWidth, boardHeigth, fieldsToWin, numOfPlayers) {
    super()
    this._numOfPlayers = numOfPlayers || 2
    this._fieldsToWin = fieldsToWin || 3
    this._board = new Board(boardWidth, boardHeigth)
    this._players = []
    this._winnerCheckers = {}
    this._validateFieldsToWin(_.max([boardWidth, boardHeigth]))
  }

  _validateFieldsToWin(maxDimension) {
    let winningIsImpossible = maxDimension < this._fieldsToWin
    if (winningIsImpossible) {
      throw new RangeError(`Fields to win should not be bigger than Board's max dimension`)
    }
  }

  get numOfPlayers() {
    return this._numOfPlayers;
  }

  get playerCount() {
    return this._players.length
  }

  get fieldsToWin() {
    return this._fieldsToWin;
  }

  addPlayer(player) {
    ParameterValidation.validateType(player, Player, 'player')
    this._validatePlayerCount()
    this._players.push(player)
    this._winnerCheckers[player.id] = new WinnerChecker(this._board, player.id, this.fieldsToWin)
  }

  _validatePlayerCount() {
    let playersCapped = this.playerCount >= this.numOfPlayers
    if (playersCapped) {
      throw new RangeError('Game is full.')
    }
  }

  play(playerId, x, y) {
    this._validateHasAllPlayers()
    this._board.play(playerId, x, y)
    return this._winnerCheckers[playerId].checkWinner(x, y)
  }

  _validateHasAllPlayers() {
    let playersCapped = this.playerCount >= this.numOfPlayers
    if (!playersCapped) {
      throw new RangeError('Game cannot start without all players.')
    }
  }

}
