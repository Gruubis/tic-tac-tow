const board = Array(25).fill("");

const isWon2 = (x, y, board) => {
  const reshape = (arr, rows, cols) => {
    const result = new Array(rows);
    for (let row = 0; row < rows; row++) {
      result[row] = new Array(cols);
    }
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        result[row][col] = arr[row * cols + col];
      }
    }
    return result;
  };
  const arr2d = reshape(board, 5, 5);

  let row = 0;
  let col = 0;
  let diagnall = 0;
  let diagnalr = 0;
  let player = "x";
  let n = arr2d.length;
  for (let i = 0; i < n; i++) {
    if (arr2d[x][i] === player) col++;
    if (arr2d[i][y] === player) row++;
    if (arr2d[i][i] === player) diagnall++;
    if (arr2d[i][5 - i - 1] === player) diagnalr++;
  }
  return row === n || col === n || diagnalr === n || diagnall === n;
};

console.log();
export default isWon2;
