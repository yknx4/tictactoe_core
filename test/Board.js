/* eslint-env node, mocha */
import test from 'unit.js'
import Board from '../lib/Board'

describe('Board class', function() {
  it('constructor() - create a new Board', function() {
    test
    .function(Board)
    .hasName('Board')
    .object(new Board())
    .isInstanceOf(Board)
  })

  it('constructor() - set default width', function() {
    let board = new Board()
    test
    .number(board.width)
    .is(3)
  })

  it('constructor() - set default height', function() {
    let board = new Board()
    test
    .number(board.height)
    .is(3)
  })

  it('constructor(5) - set width', function() {
    let board = new Board(5)
    test
    .number(board.width)
    .is(5)
  })

  it('constructor(5) - set height same as width', function() {
    let board = new Board(5)
    test
    .number(board.height)
    .is(board.width)
    .is(5)
  })

  it('constructor(5,3) - set width and height', function() {
    let board = new Board(5, 3)
    test
    .number(board.width)
    .is(5)

    test
    .number(board.height)
    .is(3)
  })

  it("play('X', 1, 1) - should set (1,1) on field as 'X'", function() {
    let board = new Board(3, 3)
    board.play('X', 1, 1)

    test
    .string(board.getCell(1, 1))
    .is('X')
  })

  it("play('X', 3, 3) - should throw an error in a 3x3 Board", function() {
    let board = new Board(3, 3)
    var invalidPlay = function() {
      board.play('X', 3, 3)
    }

    test
      .exception(invalidPlay)
      .is(new RangeError("(3,3) is outside the field. (3x3)"))
  })

  it("play('Y', 1, 1) - should throw an error when (1,1) is already set", function() {
    let board = new Board(3, 3)
    var invalidPlay = function() {
      board.play('X', 1, 1)
      board.play('Y', 1, 1)
    }

    test
      .exception(invalidPlay)
      .is(new Error("(1,1) is already set to 'X'."))
  })
})
