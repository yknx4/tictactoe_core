import Base from './Base'
import _ from 'underscore'

export default class WinnerChecker extends Base {
  constructor(board, id, x, y, numberToWin) {
    super()
    this._id = id
    this._x = x
    this._y = y
    this._board = board
    this._numberToWin = numberToWin
  }

  checkWinner() {
    let counts = [this._checkUpDown()]
    let winner = _.find(counts, num => {
      return num >= this._numberToWin
    })
    return typeof winner !== 'undefined'
  }

  _checkUpDown() {
    let x = this._x
    let y = this._y

    let upDownX = x
    let upDownY = y
    let upDownCount = 1

    while (this._checkUp(upDownX, upDownY)) {
      upDownCount++
      upDownY++
    }

    upDownX = x
    upDownY = y

    while (this._checkDown(upDownX, upDownY)) {
      upDownCount++
      upDownY--
    }
    return upDownCount
  }

  _checkUp(x, y) {
    return this._check(x, y, 0, 1)
  }

  _checkDown(x, y) {
    return this._check(x, y, 0, -1)
  }

  _check(x, y, directionX, directionY) {
    x += directionX
    y += directionY
    if (this._board._xyIsOccupied(x, y)) {
      return this._board.field[x][y] === this._id
    }
  }
}
