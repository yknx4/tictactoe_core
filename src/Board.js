import Base from './Base'
import GameSetting from './GameSetting'
import ParameterValidation from './validation/ParameterValidation.js'
import _ from 'underscore'

export default class Board extends Base {

  constructor(gameSetting) {
    super()
    gameSetting = gameSetting || new GameSetting()
    ParameterValidation.validateType(gameSetting, GameSetting, 'gameSetting')
    this._field = {}
    this._gameSetting = gameSetting
  }

  get width() {
    return this._gameSetting.boardWidth
  }

  get height() {
    return this._gameSetting.boardHeight
  }

  getCell(x, y) {
    if (this._xyIsOccupied(x, y)) {
      return this._field[x][y]
    }
    return undefined
  }

  play(id, x, y) {
    x = parseInt(x, 10)
    y = parseInt(y, 10)
    this._validatePosition(x, y)

    let field = this._field

    if (_.isUndefined(field[x])) {
      field[x] = {}
    }

    field[x][y] = id
  }

  _validatePosition(x, y) {
    let xIsInvalid = x >= this.width
    let yIsInvalid = y >= this.height
    if (xIsInvalid || yIsInvalid) {
      throw new RangeError(`(${x},${y}) is outside the field. (${this.width}x${this.height})`)
    }

    if (this._xyIsOccupied(x, y)) {
      throw new Error(`(${x},${y}) is already set to '${this.getCell(x, y)}'.`)
    }
  }

  _xyIsOccupied(x, y) {
    let xExists = !_.isUndefined(this._field[x])
    return xExists && !_.isUndefined(this._field[x][y])
  }

  get count() {
    return _.flatten(_.map(_.values(this._field), row => {
      return _.values(row)
    })).length
  }

}
