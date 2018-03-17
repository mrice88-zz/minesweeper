/*
* Simple minesweeper game in commandline,
* manually set board to show functionality.
* -Mark Rice 2018.
*/

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
      row = [];

      for (let i = 0; i < numberOfColumns; i++) {
        row.push(' ');
      }

      board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
      row = [];

      for (let i = 0; i < numberOfColumns; i++) {
        row.push(null);
      }

      board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    //Could overlap bombs, will be fixed in next rev.
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++
  }

  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
