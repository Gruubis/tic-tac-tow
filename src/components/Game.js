import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Board from "./Board";
import Refresh from "./Refresh";
import Message from "./Message";

const Game = forwardRef((props, ref) => {
  const isWon = (board, lines) => {
    // list of postion that is winning

    // checking each of the postition seeing if the combination is there
    // if it does return the True
    // else return false
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };
  const [board, setBoard] = useState(Array(props.tiles).fill(""));
  const [tiles, setTiles] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);
  useEffect(() => {
    setBoard(Array(props.tiles).fill(""));
    if (props.tiles === 16) {
      setTiles([
        [0, 1, 2],
        [1, 2, 3],
        [4, 5, 6],
        [5, 6, 7],
        [8, 9, 10],
        [9, 10, 11],
        [12, 13, 14],
        [13, 14, 15],
        [0, 4, 8],
        [4, 8, 12],
        [1, 5, 9],
        [5, 9, 13],
        [2, 6, 10],
        [6, 10, 14],
        [3, 7, 11],
        [7, 11, 15],
        [0, 5, 10],
        [5, 10, 15],
        [4, 9, 14],
        [1, 6, 11],
        [2, 5, 8],
        [3, 6, 9],
        [6, 9, 12],
        [7, 10, 13],
      ]);
    } else if (props.tiles === 25) {
      setTiles([
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 4],
        [5, 6, 7],
        [6, 7, 8],
        [7, 8, 9],
        [10, 11, 12],
        [12, 13, 14],
        [15, 16, 17],
        [16, 17, 18, 19],
        [20, 21, 22],
        [21, 22, 23],
        [22, 23, 24],
        [0, 5, 10],
        [5, 10, 15],
        [10, 15, 20],
        [1, 6, 11],
        [6, 11, 16],
        [11, 16, 21],
        [2, 7, 12],
        [7, 12, 17],
        [12, 17, 22],
        [3, 8, 13],
        [8, 13, 18],
        [13, 18, 23],
        [4, 9, 14],
        [9, 14, 19],
        [14, 19, 24],
        [0, 6, 12],
        [6, 12, 18],
        [12, 18, 24],
        [5, 22, 17],
        [11, 17, 23],
        [10, 16, 22],
        [1, 7, 13],
        [7, 13, 19],
        [2, 4, 8],
        [2, 6, 10],
        [3, 7, 11],
        [7, 11, 15],
        [4, 8, 12],
        [8, 12, 16],
        [12, 16, 20],
        [9, 13, 17],
        [13, 17, 21],
        [14, 18, 22],
      ]);
    } else if (props.tiles === 9) {
      setTiles([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]);
    }
  }, [props.tiles]);
  // first player is "X"
  // if the game is over put "" as player
  const [isPlayer, setIsPlayer] = useState("X");
  const [message, setMessage] = useState("Click to start");
  useImperativeHandle(ref, () => ({
    refresh() {
      setBoard(Array(props.tiles).fill(""));
      setMessage("Click to start");
      setIsPlayer("X");
    },
  }));
  const refresh2 = () => {
    setBoard(Array(props.tiles).fill(""));
    setMessage("Click to start");
    setIsPlayer("X");
  };
  const handleInput = (index) => {
    if (isPlayer === "" || board[index] !== "") {
      //is the game is over don't play
      // if the box has been clocked already then return
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = isPlayer;
    setBoard(boardCopy); // updating board for current player
    console.log(tiles.length);
    if (isWon(boardCopy, tiles)) {
      // once game is over
      setMessage(`WON: ${isPlayer}`);
      // since the game is over putting ""
      setIsPlayer("");
      return;
    }

    if (boardCopy.indexOf("") === -1) {
      // if no more moves game is draw
      setMessage("DRAW");
      setIsPlayer("");
    } else {
      let nextPlayer = isPlayer === "X" ? "O" : "X";
      setIsPlayer(nextPlayer); // updating player
      setMessage(`TURN: ${nextPlayer}`);
    }
  };

  return (
    <div>
      <Message value={message}> </Message>
      <Board onClick={handleInput} tiles={props.tiles} value={board} />
      <Refresh onClick={refresh2} value={"refresh"}></Refresh>
    </div>
  );
});
export default Game;
