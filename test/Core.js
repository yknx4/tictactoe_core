/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import tictactoeCore from '../src/main'
import Game from '../src/Game'

describe('tictactoe_core', function() {
  it('load', function() {
    test
      .function(tictactoeCore.default)
        .hasName('tictactoeCore')
      .object(tictactoeCore.default())
        .isInstanceOf(Game)
  })
})
