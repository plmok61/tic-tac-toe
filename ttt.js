let board = []
let playerXTurn = true

const createGame = function() {

  board = [['-','-','-'],['-','-','-'],['-','-','-']]
  console.log('player X turn')
}

const addMove = function(row, column) {

  if (playerXTurn) {
    board[row][colum] = 'X'
    playerXTurn = !playerXTurn
    console.log('Player O turn')
  } else {
    board[row][colum] = 'O'
    playerXTurn = !playerXTurn
    console.log('Player X turn')
  }

  console.log(board.join('\n'))
} 
