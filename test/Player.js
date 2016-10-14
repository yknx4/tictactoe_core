/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import Player from '../src/Player'
import Game from '../src/Game'

describe('Player class', function() {
  describe('#constructor', function() {
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
  })

  describe('#game', function() {
    it('should set game', function() {
      let player = new Player('X', 'Ale')
      let game = new Game()

      player.game = game

      test
      .object(player.game)
      .is(game)
    })

    it('should throw error if input is not game', function() {
      let game = String('Game')
      let player = String('Player')
      let stringIsNotPlayer = function() {
        player.game = game
      }

      test
      .exception(stringIsNotPlayer)
      .is(new TypeError('game should be instance of Game.'))
    })
  })

  describe('#play', function() {
    it("play(2, 2) - should raise an event when X is winner", function() {
      let game = new Game()
      var player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')

      game.addPlayer(player1)
      game.addPlayer(player2)

      var raised = false

      game.onWinnerListener = function(player) {
        raised = player1.id === player.id
      }

      player1.play(0, 0)
      player2.play(0, 1)
      player1.play(1, 1)
      player2.play(0, 2)
      player1.play(2, 2)

      test
      .bool(raised)
      .isTrue()
    })
  })
})
