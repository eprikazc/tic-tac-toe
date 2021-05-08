import {isGameOver, whoWon} from './state.js'


export function getBoardHTML(player1Moves, player2Moves) {
  const cells = Array(9).fill().map((item, index) => `
    <div class="cell" data-index=${index}>
      ${
         (() => {
           if (player1Moves.has(index)) {
             return 'X'
           } else if (player2Moves.has(index)) {
             return '0'
           } else {
             return ''
           }
         })()
       }
    </div>
  `)
  return cells.join('')
}

export function getStatusHTML(player1Moves, player2Moves) {
  const winner = whoWon(player1Moves, player2Moves)
  return `
    ${isGameOver(player1Moves, player2Moves) ? '<div>Game over</div>' : ''}
    ${winner ? `<div>${winner} won!</div>` : '' }
  `
}
