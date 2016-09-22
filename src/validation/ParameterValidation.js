import _ from 'underscore'

/**
 * validateDimension - Validates the input is a valid Dimension
 *  - it should be a number
 *  - it should be positive
 *  - throws a TypeError when input is invalid
 *
 * @param  {number} dimension the value to validate
 * @param  {string} name      the name of the parameter (optional)
 */
function validateDimension(dimension, name) {
  name = name || 'Parameter'

  let isNotANumber = typeof dimension !== 'number'
  if (isNotANumber) {
    throw new TypeError(`${name} should be a number.`)
  }

  let isInvalidDimension = dimension < 1
  if (isInvalidDimension) {
    throw new TypeError(`${name} should be greater than 0.`)
  }
}

/**
 * validatePresence - Validates the input is not undefined
 *  - throws a TypeError when input is undefined
 *
 * @param  {Object} element the input that is going to be validated
 * @param  {string} name    the name of the parameter (optional)
 */
function validatePresence(element, name) {
  name = name || 'Parameter'
  let isUndefined = _.isUndefined(element)
  if (isUndefined) {
    throw new TypeError(`${name} should be present.`)
  }
}

/**
 * validateType - Validates the input is instance of a specified type
 *
 * @param  {type} element the input that is going to be validated
 * @param  {type} type    the type that the input should be instanceof
 * @param  {type} name    the name of the parameter (optional)
 */
function validateType(element, type, name) {
  name = name || 'Parameter'
  let hasProperType = element instanceof type
  if (!hasProperType) {
    throw new TypeError(`${name} should be instance of #{type.name}.`)
  }
}

export default {
  validateDimension: validateDimension,
  validatePresence: validatePresence,
  validateType: validateType
}
