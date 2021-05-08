import {getInitialState, move} from './state.js'
import {getBoardHTML, getStatusHTML} from './templates.js'

const board_elem = document.querySelector(".js-board")
const status_elem = document.querySelector(".js-status")
const reset_elem = document.querySelector(".js-reset")

function drawGame(state) {
  const {player1Moves, player2Moves} = state
  board_elem.innerHTML = getBoardHTML(player1Moves, player2Moves)
  status_elem.innerHTML = getStatusHTML(player1Moves, player2Moves)
}


function setupGame() {
  let state = getInitialState();
  drawGame(state)
  board_elem.addEventListener("click", event => {
    if (event.target.classList.contains("cell")) {
      state = move(state, parseInt(event.target.dataset.index))
      drawGame(state)
    }
  })
  reset_elem.addEventListener("click", () => {
    state = getInitialState();
    drawGame(state)
  })
}

setupGame()
