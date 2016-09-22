/* eslint-env node, mocha */
import test from 'unit.js'
import ParameterValidation from '../../lib/validation/ParameterValidation.js'

describe('ParameterValidation module', function() {
  describe('validateDimension', function() {
    it('validateDimension(parameter) - should throw and error when Dimension is not a number', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.validateDimension("1")
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('Parameter should be a number.'))
    })

    it('validateDimension(parameter, name) - should throw and error when Dimension is not a number', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.validateDimension("1", "one")
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('one should be a number.'))
    })

    it('validateDimension(parameter) - should throw and error when Dimension is negative', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.validateDimension(-1)
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('Parameter should be greater than 0.'))
    })

    it('validateDimension(parameter, name) - should throw and error when Dimension is negative', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.validateDimension(-1, 'negative')
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('negative should be greater than 0.'))
    })
  })

  describe('validatePresence', function() {
    it('validatePresence(parameter) - should throw and error when Presence is not a number', function() {
      let validatePresenceOnUndefined = function() {
        ParameterValidation.validatePresence()
      }

      test
        .exception(validatePresenceOnUndefined)
        .is(new TypeError('Parameter should be present.'))
    })

    it('validatePresence(parameter, name) - should throw and error when Presence is not a number', function() {
      let validatePresenceOnUndefined = function() {
        let thisIsUndefined
        ParameterValidation.validatePresence(thisIsUndefined, "one")
      }

      test
        .exception(validatePresenceOnUndefined)
        .is(new TypeError('one should be present.'))
    })
  })

  describe('validateType', function() {
    it('validateType(parameter, type) - should throw and error when String is not Number', function() {
      let validateTypeOnObject = function() {
        ParameterValidation.validateType(String(1), Number)
      }

      test
        .exception(validateTypeOnObject)
        .is(new TypeError('Parameter should be instance of Number.'))
    })

    it('validateType(parameter, type, name) - should throw and error when String is not Number', function() {
      let validateTypeOnObject = function() {
        ParameterValidation.validateType(String(1), Number, 'one')
      }

      test
        .exception(validateTypeOnObject)
        .is(new TypeError('one should be instance of Number.'))
    })
  })
})
