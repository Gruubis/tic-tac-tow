import Square from "./Square";
import "./Board.css";

const Board = (props) => {
  let classN = "Board3x3";
  if (props.tiles === 16) {
    classN = "Board4x4";
  } else if (props.tiles === 25) {
    classN = "Board5x5";
  }
  return (
    <div className={`${classN}`}>
      {[...Array(props.tiles)].map((square, index) => (
        <Square
          key={index}
          name={index}
          onClick={() => props.onClick(index)}
          value={props.value[index]}
          index={index}
        ></Square>
      ))}
    </div>
  );
};
export default Board;
