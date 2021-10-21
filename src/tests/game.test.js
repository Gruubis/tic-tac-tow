import { lines3x3, lines4x4, lines5x5 } from "../lines/lines";
const isWon = (board, lines) => {
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
};

test("should return false on 3x3 board", () => {
  const board = Array(9).fill("");
  const result = isWon(board, lines3x3);
  expect(result).toBe(false);
});

test("should return false on 4x4 board", () => {
  const board = Array(16).fill("");
  const result = isWon(board, lines4x4);
  expect(result).toBe(false);
});
test("should return false on 5x5 board", () => {
  const board = Array(25).fill("");
  const result = isWon(board, lines5x5);
  expect(result).toBe(false);
});
test("should return true on 3x3 board", () => {
  const board = Array(9).fill("X", 0, 2);
  const result = isWon(board, lines3x3);
  expect(result).toBe(true);
});
test("should return true on 4x4 board", () => {
  const board = Array(16).fill("X", 0, 2);
  const result = isWon(board, lines4x4);
  expect(result).toBe(true);
});
test("should return true on 5x5 board", () => {
  const board = Array(25).fill("X", 0, 2);
  const result = isWon(board, lines5x5);
  expect(result).toBe(true);
});
