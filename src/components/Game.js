import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Board from "./Board";
import Refresh from "./Refresh";
import Message from "./Message";
import { lines3x3, lines4x4, lines5x5 } from "../lines/lines";

const Game = forwardRef((props, ref) => {
  const isWon = (board, lines) => {
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };
  const [board, setBoard] = useState(Array(props.tiles).fill(""));
  const [tiles, setTiles] = useState(lines3x3);
  useEffect(() => {
    setBoard(Array(props.tiles).fill(""));
    if (props.tiles === 16) {
      setTiles(lines4x4);
    } else if (props.tiles === 25) {
      setTiles(lines5x5);
    } else if (props.tiles === 9) {
      setTiles(lines3x3);
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
