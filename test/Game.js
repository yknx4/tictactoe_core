/* eslint-env node, mocha */
/* eslint no-new: "off"*/
import test from 'unit.js'
import Game from '../lib/Game'
import Board from '../lib/Board'

describe('Game class', function() {
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
