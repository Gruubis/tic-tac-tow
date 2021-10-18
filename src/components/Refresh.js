const style = {
  width: "200px",
  margin: "20px auto",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
};

const Refresh = (props) => (
  <button name={"btn"} style={style} onClick={props.onClick}>
    {props.value}
  </button>
);

export default Refresh;
