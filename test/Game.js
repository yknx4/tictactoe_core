/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import Game from '../lib/Game'
import Board from '../lib/Board'
import Player from '../lib/Player'

describe('Game class', function() {
  describe('#constructor', function() {
    it('constructor(3, 3) - set default number of players', function() {
      let game = new Game(3, 3)
      test
      .number(game.numOfPlayers)
      .is(2)
    })

    it('constructor(3, 3) - set default fields to win count', function() {
      let game = new Game(3, 3)
      test
      .number(game.fieldsToWin)
      .is(3)
    })

    it('constructor(3, 3) - create a 3x3 Board', function() {
      let game = new Game(3, 3)
      test
      .object(game._board)
      .isInstanceOf(Board)
    })

    it('constructor(3, 3) - throw and error when fields to win is outside board boundaries', function() {
      let createWrongGame = function() {
        new Game(3, 3, 4)
      }
      test
      .exception(createWrongGame)
      .is(new RangeError(`Fields to win should not be bigger than Board's max dimension`))
    })

    it('constructor(3, 3, 2, 5) - set number of players to 5 and fields to win to 2', function() {
      let game = new Game(3, 3, 2, 5)
      test
      .number(game.numOfPlayers)
      .is(5)
      .number(game.fieldsToWin)
      .is(2)
    })
  })

  describe('#addPlayer', function() {
    it('addPlayer(player) - should throw error if player is not a player', function() {
      let game = new Game(3, 3)
      let player = String('Player')
      let stringIsNotPlayer = function() {
        game.addPlayer(player)
      }

      test
      .exception(stringIsNotPlayer)
      .is(new TypeError('player should be instance of Player.'))
    })

    it('addPlayer(player) - should throw error if game is full', function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')
      let player3 = new Player('Z', 'name3')
      let morePlayersThanAllowed = function() {
        game.addPlayer(player1)
        game.addPlayer(player2)
        game.addPlayer(player3)
      }

      test
      .exception(morePlayersThanAllowed)
      .is(new RangeError('Game is full.'))
    })

    it('addPlayer(player) - should set player to input', function() {
      let game = new Game(3, 3)
      let player = new Player('X', 'name')

      game.addPlayer(player)

      test
      .value(game.getPlayer('X'))
      .is(player)
    })
  })

  describe('#play', function() {
    it("play('X', 1, 1) - should throw an error if game doesn't have enough players", function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      game.addPlayer(player1)

      let notEnoughPlayers = function() {
        game.play('X', 1, 1)
      }

      test
      .exception(notEnoughPlayers)
      .is(new RangeError('Game cannot start without all players.'))
    })

    it("play('X', 2, 2) - should raise an error when a player want to plays twice in a row", function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')

      game.addPlayer(player1)
      game.addPlayer(player2)

      let isTurnOfY = function() {
        game.play('X', 0, 0)
        game.play('X', 1, 1)
        game.play('X', 2, 2)
      }

      test
        .exception(isTurnOfY)
        .is(new Error('This is turn of Y'))
    })

    it("play('X', 2, 2) - should raise an event with player 'X' when X is winner", function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')

      game.addPlayer(player1)
      game.addPlayer(player2)

      let raised = false

      game.onWinnerListener = function(player) {
        raised = player1.id === player.id
      }

      game.play('X', 0, 0)
      game.play('Y', 0, 1)
      game.play('X', 1, 1)
      game.play('Y', 0, 2)
      game.play('X', 2, 2)

      test
        .bool(raised)
        .isTrue()
    })

    it("play('X', 2, 1) - should raise an event with null when there is no winner", function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')

      game.addPlayer(player1)
      game.addPlayer(player2)

      let raised = false

      game.onWinnerListener = function(player) {
        raised = player === null
      }

      game.play('X', 0, 0)
      game.play('Y', 0, 1)
      game.play('X', 0, 2)
      game.play('Y', 1, 0)
      game.play('X', 1, 2)
      game.play('Y', 1, 1)
      game.play('X', 2, 0)
      game.play('Y', 2, 2)
      game.play('X', 2, 1)

      test
        .bool(raised)
        .isTrue()
    })

    it("play('X', 2, 2) - should set the turn back to the player when there is an error", function() {
      let game = new Game(3, 3)
      let player1 = new Player('X', 'name1')
      let player2 = new Player('Y', 'name2')

      game.addPlayer(player1)
      game.addPlayer(player2)

      let alreadyOccupied = function() {
        game.play('X', 0, 0)
        game.play('Y', 0, 0)
      }

      test
        .exception(alreadyOccupied)
        .is(new Error("(0,0) is already set to 'X'."))
        .value(game._nextTurn)
        .is('Y')
    })
  })
})
