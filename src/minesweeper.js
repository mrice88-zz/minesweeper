\*
* Simple minesweeper game in commandline,
* manually set board to show functionality.
* -Mark Rice 2018.
*/

const printBoard = (board) => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
