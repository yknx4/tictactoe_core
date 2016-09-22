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
    let board = new Board(5,3)
    test
      .number(board.width)
      .is(5)

    test
      .number(board.height)
      .is(3)
  })

})
