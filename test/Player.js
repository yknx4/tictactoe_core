/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import Player from '../lib/Player'
import Game from '../lib/Game'

describe('Player class', function() {
  it('constructor() - create a new Player', function() {
    var createPlayer = function() {
      new Player()
    }
    test
      .exception(createPlayer)
      .is(new TypeError("id should be present."))
  })

  it('constructor(id, name) - create a new Player', function() {
    test
      .function(Player)
        .hasName('Player')
      .object(new Player('X', "Ale"))
        .isInstanceOf(Player)
  })

  it('constructor(id, name) - set id', function() {
    let player = new Player('X', 'Ale')

    test
      .string(player.id)
      .is('X')
  })

  it('constructor(id, name) - set name', function() {
    let player = new Player('X', 'Ale')

    test
      .string(player.name)
      .is('Ale')
  })

  it('game - should set game', function() {
    let player = new Player('X', 'Ale')
    let game = new Game(3, 3)

    player.game = game

    test
      .object(player.game)
      .is(game)
  })
})
