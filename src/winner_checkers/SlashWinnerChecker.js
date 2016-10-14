import StandardWinnerChecker from './StandardWinnerChecker'
export default class SlashWinnerChecker extends StandardWinnerChecker {

  checkWinner(x, y) {
    this._x = x
    this._y = y
    let num = this._checkSlash()
    return num >= this._numberToWin
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

}
