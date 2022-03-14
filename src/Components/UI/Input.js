import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["input-1"]}>
      <label className={classes["input-label"]}>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        ref={props.inputRef}
      />
    </div>
  );
};

export default Input;
