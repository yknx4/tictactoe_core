import Base from './Base';
import Board from './Board'
import Player from './Player'
import ParameterValidation from './validation/ParameterValidation.js'

export default class Game extends Base {

  constructor(boardWidth, boardHeigth, numOfPlayers, fieldsToWin) {
    super()
    this._numOfPlayers = numOfPlayers || 2
    this._fieldsToWin = fieldsToWin || 3
    this._board = new Board(boardWidth, boardHeigth)
    this._players = []
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
  }

  _validatePlayerCount() {
    let playersCapped = this.playerCount >= this.numOfPlayers
    if (playersCapped) {
      throw new RangeError('Game is full.')
    }
  }

}
