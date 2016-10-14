import StandardWinnerChecker from './StandardWinnerChecker'

export default class UpDownWinnerChecker extends StandardWinnerChecker {

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let num = this._checkUpDown()
    return num >= this._numberToWin
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

}
