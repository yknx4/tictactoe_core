import WinnerChecker from '../WinnerChecker'
import _ from 'underscore'

export default class StandardWinnerChecker extends WinnerChecker {

  checkWinner(x, y) {
    let UpDownWinnerChecker = require('./UpDownWinnerChecker').default
    let LeftRightWinnerChecker = require('./LeftRightWinnerChecker').default
    let SlashWinnerChecker = require('./SlashWinnerChecker').default
    let BackSlashWinnerChecker = require('./BackSlashWinnerChecker').default

    let checkers = [
      new UpDownWinnerChecker(this._getOptions()),
      new LeftRightWinnerChecker(this._getOptions()),
      new SlashWinnerChecker(this._getOptions()),
      new BackSlashWinnerChecker(this._getOptions())
    ]

    let result = _.find(checkers, checker => {
      return checker.checkWinner(x, y)
    })

    return typeof result !== 'undefined'
  }

  _check(x, y, directionX, directionY) {
    x += directionX
    y += directionY
    return this._board.getCell(x, y) === this._id
  }
}
