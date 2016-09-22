import Base from './Base'
import ParameterValidation from './validation/ParameterValidation.js'

export default class Board extends Base{

  constructor(width, height){
    super()
    width = width || 3
    height = height || width
    ParameterValidation.ValidateDimension(width, 'width')
    ParameterValidation.ValidateDimension(height, 'height')
    this._width = width
    this._height = height
  }

  get width(){
    return this._width
  }

  get height(){
    return this._height
  }

}
