import test from 'unit.js'
import ParameterValidation from '../../lib/validation/ParameterValidation.js'

describe('ParameterValidation module', function() {
  describe('ValidateDimension', function() {
    it('ValidateDimension(parameter) - should throw and error when Dimension is not a number', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.ValidateDimension("1")
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('Parameter should be a number.'))

    })

    it('ValidateDimension(parameter, name) - should throw and error when Dimension is not a number', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.ValidateDimension("1", "one")
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('one should be a number.'))

    })

    it('ValidateDimension(parameter) - should throw and error when Dimension is negative', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.ValidateDimension(-1)
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('Parameter should be greater than 0.'))

    })

    it('ValidateDimension(parameter, name) - should throw and error when Dimension is negative', function() {
      let validateDimensionOnString = function() {
        ParameterValidation.ValidateDimension(-1, 'negative')
      }

      test
        .exception(validateDimensionOnString)
        .is(new TypeError('negative should be greater than 0.'))

    })

  })

  describe('ValidatePresence', function() {
    it('ValidatePresence(parameter) - should throw and error when Presence is not a number', function() {
      let validatePresenceOnUndefined = function() {
        ParameterValidation.ValidatePresence()
      }

      test
        .exception(validatePresenceOnUndefined)
        .is(new TypeError('Parameter should be present.'))

    })

    it('ValidatePresence(parameter, name) - should throw and error when Presence is not a number', function() {
      let validatePresenceOnUndefined = function() {
        let thisIsUndefined
        ParameterValidation.ValidatePresence(thisIsUndefined, "one")
      }

      test
        .exception(validatePresenceOnUndefined)
        .is(new TypeError('one should be present.'))

    })


  })

})
