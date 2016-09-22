import test from 'unit.js'
import Game from '../lib/Game'

describe('Game class', function() {
  it('constructor() - create a new Game', function() {
    test
      .function(Game)
        .hasName('Game')
      .object(new Game())
        .isInstanceOf(Game)

  })

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
