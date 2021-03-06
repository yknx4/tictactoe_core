/* eslint-env node, mocha */
import test from 'unit.js'
import WinnerChecker from '../src/WinnerChecker'
import Board from '../src/Board'

describe('WinnerChecker class', function() {
  it('constructor(Board, X, 3) - create a new WinnerChecker', function() {
    test
    .function(WinnerChecker)
    .hasName('WinnerChecker')
    .object(new WinnerChecker({board: new Board(), id: 'X', numberToWin: 3}))
    .isInstanceOf(WinnerChecker)
  })

  it("checkWinner() - should win when there are 3 same points vertically", function() {
    let board = new Board()
    board.play('X', 1, 0)
    board.play('X', 1, 1)
    board.play('X', 1, 2)

    let winnerChecker = new WinnerChecker({board: board, id: 'X', numberToWin: 3})

    test
      .bool(winnerChecker.checkWinner(1, 0))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(1, 1))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(1, 2))
      .isTrue()
  })

  it("checkWinner() - should win when there are 3 same points horizontally", function() {
    let board = new Board()
    board.play('X', 0, 1)
    board.play('X', 1, 1)
    board.play('X', 2, 1)

    let winnerChecker = new WinnerChecker({board: board, id: 'X', numberToWin: 3})

    test
      .bool(winnerChecker.checkWinner(0, 1))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(1, 1))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(2, 1))
      .isTrue()
  })

  it("checkWinner() - should win when there are 3 same points in / direction", function() {
    let board = new Board()
    board.play('X', 0, 0)
    board.play('X', 1, 1)
    board.play('X', 2, 2)

    let winnerChecker = new WinnerChecker({board: board, id: 'X', numberToWin: 3})

    test
      .bool(winnerChecker.checkWinner(0, 0))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(1, 1))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(2, 2))
      .isTrue()
  })

  it("checkWinner() - should win when there are 3 same points in \\ direction", function() {
    let board = new Board()
    board.play('X', 2, 0)
    board.play('X', 1, 1)
    board.play('X', 0, 2)

    let winnerChecker = new WinnerChecker({board: board, id: 'X', numberToWin: 3})

    test
      .bool(winnerChecker.checkWinner(2, 0))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(1, 1))
      .isTrue()
    test
      .bool(winnerChecker.checkWinner(0, 2))
      .isTrue()
  })
})
