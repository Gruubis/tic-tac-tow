import "./Square.css";

const Square = (props) => {
  return (
    <button className="Square" onClick={props.onClick} name={props.name}>
      {props.value}
    </button>
  );
};

export default Square;
