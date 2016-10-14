import Board from './Board'
import ParameterValidation from './validation/ParameterValidation.js'

export default class WinnerChecker {
  constructor(options) {
    this._id = options.id
    this._numberToWin = options.numberToWin
    ParameterValidation.validateType(options.board, Board, 'options.board')
    this._board = options.board
  }

  checkWinner(x, y) {
    let StandardWinnerChecker = require('./winner_checkers/StandardWinnerChecker').default
    return new StandardWinnerChecker(this._getOptions()).checkWinner(x, y)
  }

  _getOptions() {
    return {id: this._id, numberToWin: this._numberToWin, board: this._board}
  }

}
