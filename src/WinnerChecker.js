import Base from './Base'
import _ from 'underscore'

export default class WinnerChecker extends Base {
  constructor(board, id, numberToWin) {
    super()
    this._id = id
    this._board = board
    this._numberToWin = numberToWin
  }

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let counts = [this._checkUpDown(), this._checkLeftRight()]
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

  _checkLeftRight() {
    let x = this._x
    let y = this._y

    let leftRightX = x
    let leftRightY = y
    let leftRightCount = 1

    while (this._checkRigth(leftRightX, leftRightY)) {
      leftRightCount++
      leftRightX++
    }

    leftRightX = x
    leftRightY = y

    while (this._checkLeft(leftRightX, leftRightY)) {
      leftRightCount++
      leftRightX--
    }
    return leftRightCount
  }

  _checkLeft(x, y) {
    return this._check(x, y, -1, 0)
  }

  _checkRigth(x, y) {
    return this._check(x, y, 1, 0)
  }

  _check(x, y, directionX, directionY) {
    x += directionX
    y += directionY
    if (this._board._xyIsOccupied(x, y)) {
      return this._board.field[x][y] === this._id
    }
  }
}
