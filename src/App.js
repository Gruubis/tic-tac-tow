import { useRef, useState } from "react";
import "./App.css";

import Game from "./components/Game";

function App() {
  const [state, setState] = useState(9);
  const childFunc = useRef();

  const clickHandler = (tiles) => {
    setState(tiles);
    childFunc.current.refresh();
  };
  return (
    <div>
      <div className="buttons">
        <button onClick={() => clickHandler(9)}>3X3</button>
        <button onClick={() => clickHandler(16)}>4X4</button>
        <button onClick={() => clickHandler(25)}>5X5</button>
      </div>
      <Game ref={childFunc} tiles={state}></Game>
    </div>
  );
}

export default App;
