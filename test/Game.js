/* eslint-env node, mocha */
import test from 'unit.js'
import Game from '../lib/Game'

describe('Game class', function() {
  it('constructor() - set default player count', function() {
    let game = new Game()
    test
      .number(game.playerCount)
      .is(2)
  })

  it('constructor() - set default fields to win count', function() {
    let game = new Game()
    test
      .number(game.fieldsToWin)
      .is(3)
  })
})
