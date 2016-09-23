import Base from './Base'
import ParameterValidation from './validation/ParameterValidation.js'
import _ from 'underscore'

export default class Board extends Base {

  constructor(width, height) {
    super()
    width = width || 3
    height = height || width
    this._validateInput(width, height)
    this._setupDimensions(width, height)
    this._field = {}
  }

  _validateInput(width, height) {
    ParameterValidation.validateDimension(width, 'width')
    ParameterValidation.validateDimension(height, 'height')
  }

  _setupDimensions(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }

  get height() {
    return this._height
  }

  get field() {
    return this._field;
  }

  getCell(x, y) {
    if (this._xyIsOccupied(x, y)) {
      return this.field[x][y]
    }
    return undefined
  }

  play(id, x, y) {
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
      throw new Error(`(${x},${y}) is already set to '${this.field[x][y]}'.`)
    }
  }

  _xyIsOccupied(x, y) {
    let xExists = !_.isUndefined(this.field[x])
    return xExists && !_.isUndefined(this.field[x][y])
  }

}
