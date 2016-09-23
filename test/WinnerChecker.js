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

    let winnerChecker = new WinnerChecker(board, 'X', 3)

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
})
