import Game from './Game'
import ParameterValidation from './validation/ParameterValidation.js'

export default class Player {

  constructor(id, name) {
    ParameterValidation.validatePresence(id, 'id')
    ParameterValidation.validatePresence(name, 'name')
    this._id = id
    this._name = name
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get game() {
    return this._game
  }

  set game(game) {
    ParameterValidation.validateType(game, Game, 'game')
    this._game = game
  }

  play(x, y) {
    this.game.play(this.id, x, y)
  }

}
