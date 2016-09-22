import Base from './Base';

export default class Game extends Base {

  constructor() {
    super()
    this._playerCount = 2
    this._fieldsToWin = 3
  }

  get playerCount() {
    return this._playerCount;
  }

  get fieldsToWin() {
    return this._fieldsToWin;
  }

}
