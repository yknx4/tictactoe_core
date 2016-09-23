import Game from './Game'

/**
 * tictactoeCore - Tic-Tac-Toe (Gato in Spanish) game implementation
 *
 * @return {Game}  returns a new instance of Game
 */
function tictactoeCore() {
  return new Game(3, 3)
}

export default tictactoeCore
