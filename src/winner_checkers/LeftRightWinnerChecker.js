import StandardWinnerChecker from './StandardWinnerChecker'
export default class LeftRightWinnerChecker extends StandardWinnerChecker {

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let num = this._checkLeftRight()
    return num >= this._numberToWin
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

}
