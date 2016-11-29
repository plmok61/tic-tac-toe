var board = []
var playerXTurn = true

var createGame = function() {

  board = [['-','-','-'],['-','-','-'],['-','-','-']]
  console.log('player X turn')
}

var addMove = function(row, column) {


  if (playerXTurn) {
    board[row][column] = 'X'
    playerXTurn = !playerXTurn
    checkWin()
    console.log('Player O turn')
  } else {
    board[row][column] = 'O'
    playerXTurn = !playerXTurn
    checkWin()
    console.log('Player X turn')
  }

  console.log(board.join('\n'))
} 

var checkWin = function() {
  if (board[0][0] === 'X' &&
      board[0][1] === 'X' &&
      board[0][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (board[1][0] === 'X' &&
      board[1][1] === 'X' &&
      board[1][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (board[2][0] === 'X' &&
      board[2][1] === 'X' &&
      board[2][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (board[0][0] === 'O' &&
      board[0][1] === 'O' &&
      board[0][2] === 'O' ) {
    console.log('Player O wins!')
  }

  if (board[1][0] === 'O' &&
      board[1][1] === 'O' &&
      board[1][2] === 'O' ) {
    console.log('Player O wins!')
  }

  if (board[2][0] === 'O' &&
      board[2][1] === 'O' &&
      board[2][2] === 'O' ) {
    console.log('Player O wins!')
  }

  if (board[0][1] === 'X' &&)


}