import Base from './Base'
import Board from './Board'
import ParameterValidation from './validation/ParameterValidation.js'
import _ from 'underscore'

export default class WinnerChecker extends Base {
  constructor(board, id, numberToWin) {
    super()
    this._id = id
    this._board = board
    this._numberToWin = numberToWin
    ParameterValidation.validateType(board, Board, 'board')
  }

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let counts = [this._checkUpDown(), this._checkLeftRight(), this._checkSlash(), this._checkBackSlash()]
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

  _checkSlash() {
    let x = this._x
    let y = this._y

    let slashX = x
    let slashY = y
    let slashCount = 1

    while (this._checkSlashUp(slashX, slashY)) {
      slashCount++
      slashY++
      slashX++
    }

    slashX = x
    slashY = y

    while (this._checkSlashDown(slashX, slashY)) {
      slashCount++
      slashY--
      slashX--
    }
    return slashCount
  }

  _checkSlashUp(x, y) {
    return this._check(x, y, 1, 1)
  }

  _checkSlashDown(x, y) {
    return this._check(x, y, -1, -1)
  }

  _checkBackSlash() {
    let x = this._x
    let y = this._y

    let backSlashX = x
    let backSlashY = y
    let backSlashCount = 1

    while (this._checkBackSlashUp(backSlashX, backSlashY)) {
      backSlashCount++
      backSlashY++
      backSlashX--
    }

    backSlashX = x
    backSlashY = y

    while (this._checkBackSlashDown(backSlashX, backSlashY)) {
      backSlashCount++
      backSlashY--
      backSlashX++
    }
    return backSlashCount
  }

  _checkBackSlashUp(x, y) {
    return this._check(x, y, -1, 1)
  }

  _checkBackSlashDown(x, y) {
    return this._check(x, y, 1, -1)
  }

  _check(x, y, directionX, directionY) {
    x += directionX
    y += directionY
    return this._board.getCell(x, y) === this._id
  }
}
