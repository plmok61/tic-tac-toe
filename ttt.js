var ttt = function() {
  this.board = [['-','-','-'],['-','-','-'],['-','-','-']]
  this.playerXTurn = true
  console.log('player X turn')
}

ttt.prototype.addMove = function(row, column) {

  if (this.playerXTurn) {
    this.board[row][column] = 'X'
    this.playerXTurn = !this.playerXTurn
    this.checkWin()
    console.log('Player O turn')
  } else {
    this.board[row][column] = 'O'
    this.playerXTurn = !this.playerXTurn
    this.checkWin()
    console.log('Player X turn')
  }

  console.log(this.board.join('\n'))
} 

ttt.prototype.checkWin = function() {
  if (this.board[0][0] === 'X' &&
      this.board[0][1] === 'X' &&
      this.board[0][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (this.board[1][0] === 'X' &&
      this.board[1][1] === 'X' &&
      this.board[1][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (this.board[2][0] === 'X' &&
      this.board[2][1] === 'X' &&
      this.board[2][2] === 'X' ) {
    console.log('Player X wins!')
  }

  if (this.board[0][0] === 'O' &&
      this.board[0][1] === 'O' &&
      this.board[0][2] === 'O' ) {
    console.log('Player O wins!')
  }

  if (this.board[1][0] === 'O' &&
      this.board[1][1] === 'O' &&
      this.board[1][2] === 'O' ) {
    console.log('Player O wins!')
  }

  if (this.board[2][0] === 'O' &&
      this.board[2][1] === 'O' &&
      this.board[2][2] === 'O' ) {
    console.log('Player O wins!')
  }

}