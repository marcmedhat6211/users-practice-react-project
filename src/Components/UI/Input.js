import classes from "./Input.module.css";

const Input = (props) => {
  const changeInputHandler = (event) => {
    props.onChangeInput(event.target.value);
  };

  return (
    <div className={classes["input-1"]}>
      <label className={classes["input-label"]}>{props.label}</label>
      <input type={props.type} onInput={changeInputHandler} />
    </div>
  );
};

export default Input;
