/* eslint-env node, mocha */
import test from 'unit.js'
import WinnerChecker from '../lib/WinnerChecker'
import Board from '../lib/Board'

describe('Board class', function() {
  it('constructor(X, 1, 1, 3) - create a new WinnerChecker', function() {
    test
    .function(WinnerChecker)
    .hasName('WinnerChecker')
    .object(new WinnerChecker('X', 1, 1, 3))
    .isInstanceOf(WinnerChecker)
  })

  it("checkWinner() - should win when there are 3 same points vertically", function() {
    let board = new Board(3, 3)
    board.play('X', 1, 0)
    board.play('X', 1, 1)
    board.play('X', 1, 2)

    let winnerChecker = new WinnerChecker(board, 'X', 1, 0, 3)
    let winnerChecker2 = new WinnerChecker(board, 'X', 1, 1, 3)
    let winnerChecker3 = new WinnerChecker(board, 'X', 1, 2, 3)

    test
      .bool(winnerChecker.checkWinner())
      .isTrue()
    test
      .bool(winnerChecker2.checkWinner())
      .isTrue()
    test
      .bool(winnerChecker3.checkWinner())
      .isTrue()
  })
})
