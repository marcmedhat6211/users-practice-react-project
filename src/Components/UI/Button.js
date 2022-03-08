import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={classes.button}>
      {props.buttonText}
    </button>
  );
};

export default Button;
