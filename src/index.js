import {getInitialState, move} from './state.js'
import {getBoardHTML, getStatusHTML} from './templates.js'

const boardElem = document.querySelector(".js-board")
const statusElem = document.querySelector(".js-status")
const resetElem = document.querySelector(".js-reset")

function drawGame(state) {
  const {player1Moves, player2Moves} = state
  boardElem.innerHTML = getBoardHTML(player1Moves, player2Moves)
  statusElem.innerHTML = getStatusHTML(player1Moves, player2Moves)
}


function setupGame() {
  let state = getInitialState();
  drawGame(state)
  boardElem.addEventListener("click", event => {
    if (event.target.classList.contains("cell")) {
      state = move(state, parseInt(event.target.dataset.index))
      drawGame(state)
    }
  })
  resetElem.addEventListener("click", () => {
    state = getInitialState();
    drawGame(state)
  })
}

setupGame()
