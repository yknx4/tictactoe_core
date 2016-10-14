import StandardWinnerChecker from './StandardWinnerChecker'
export default class BackSlashWinnerChecker extends StandardWinnerChecker {

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let num = this._checkBackSlash()
    return num >= this._numberToWin
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

}
