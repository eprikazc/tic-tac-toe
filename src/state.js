const PLAYER1 = 'PLSYER1'
const PLAYER2 = 'PLAYER2'

const WON_SEQUENCES = [
  new Set([0, 1, 2]),
  new Set([3, 4, 5]),
  new Set([6, 7, 8]),
  new Set([0, 3, 6]),
  new Set([1, 4, 7]),
  new Set([2, 5, 8]),
  new Set([0, 4, 8]),
  new Set([2, 4, 6]),
]


export function getInitialState() {
  return {
    player1Moves: new Set(),
    player2Moves: new Set(),
    turn: PLAYER1
  }
}


export function move(state, cell_index) {
  const newState = Object.assign({}, state)
  const {player1Moves, player2Moves} = state
  const isCellFree = !player2Moves.has(cell_index) && !player1Moves.has(cell_index)
  if (!isCellFree || isGameOver(player1Moves, player2Moves)) {
    return state;
  }
  if (newState.turn == PLAYER1) {
    player1Moves.add(cell_index)
    newState.turn = PLAYER2
  } else {
    player2Moves.add(cell_index)
    newState.turn = PLAYER1
  }
  return newState
}

export function whoWon(player1Moves, player2Moves) {
  for (let sequence of WON_SEQUENCES) {
    if (setIncludes(player1Moves, sequence)) {
      return PLAYER1
    } else if (setIncludes(player2Moves, sequence)) {
      return PLAYER1
    }
  }
}

export function isGameOver(player1Moves, player2Moves) {
  return Boolean(
    whoWon(player1Moves, player2Moves)
    || Array(9).fill().map((_, i) => i).every(i => player1Moves.has(i) || player2Moves.has(i))
  )
}


function setIncludes(set1, set2) {
  return Array.from(set2).every(elem => set1.has(elem))
}
