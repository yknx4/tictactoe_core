import ParameterValidation from './validation/ParameterValidation.js'
import _ from 'underscore'

export default class GameSetting {

  constructor() {
    this._numOfPlayers = 2
    this._fieldsToWin = 3
    this._boardHeight = 3
    this._boardWidth = 3
  }

  setBoardDimensions(width, height) {
    height = height || width
    ParameterValidation.validateDimension(width, 'width')
    ParameterValidation.validateDimension(height, 'height')
    this._validateFieldsToWin(_.max([width, height]), this.fieldsToWin)
    this._boardWidth = width
    this._boardHeight = height
    return this
  }

  _validateFieldsToWin(maxDimension, fieldsToWin) {
    let winningIsImpossible = maxDimension < fieldsToWin
    if (winningIsImpossible) {
      throw new RangeError(`Fields to win should not be bigger than Board's max dimension`)
    }
  }

  setFieldsToWin(fieldsToWin) {
    this._validateFieldsToWin(_.max([this.boardWidth, this.boardHeight]), fieldsToWin)
    this._fieldsToWin = fieldsToWin
    return this
  }

  setNumberOfPlayers(numberOfPlayers) {
    this._numOfPlayers = numberOfPlayers
    return this
  }

  get boardHeight() {
    return this._boardHeight
  }

  get boardWidth() {
    return this._boardWidth
  }

  get fieldsToWin() {
    return this._fieldsToWin
  }

  get numberOfPlayers() {
    return this._numOfPlayers
  }
}
