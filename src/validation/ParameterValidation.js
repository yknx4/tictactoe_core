import _ from 'underscore'

function ValidateDimension(dimension, name){
  name = name || 'Parameter'

  let isNotANumber = typeof dimension !== 'number'
  if(isNotANumber){
    throw new TypeError(`${name} should be a number.`)
  }

  let isInvalidDimension = dimension < 1
  if(isInvalidDimension){
    throw new TypeError(`${name} should be greater than 0.`)
  }

}

function ValidatePresence(element, name){
  name = name || 'Parameter'
  let isUndefined = _.isUndefined(element)
  if(isUndefined){
    throw new TypeError(`${name} should be present.`)
  }
}

export default {
  ValidateDimension: ValidateDimension,
  ValidatePresence: ValidatePresence
}
