import test from 'unit.js'
import tictactoeCore from '../lib/main'
import Game from '../lib/Game'
import Base from '../lib/Base'

describe('tictactoe_core', function() {
  it('load', function() {

    test
      .function(tictactoeCore)
        .hasName('tictactoeCore')
      .object(tictactoeCore())
        .isInstanceOf(Game)


  })

  describe('Base class', function() {
    it('constructor() - throw a TypeError', function() {

      var newBase = function(){
        new Base()
      }

      test
        .exception(newBase)
        .is(new TypeError("Cannot construct Base isnstances directly"))


    });

  });

})
