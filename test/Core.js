/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import tictactoeCore from '../lib/main'
import Game from '../lib/Game'

describe('tictactoe_core', function() {
  it('load', function() {
    test
      .function(tictactoeCore.default)
        .hasName('tictactoeCore')
      .object(tictactoeCore.default())
        .isInstanceOf(Game)
  })
})
