import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      // this syntax means if the props.type is undefined use the 'button' type
      type={props.type || "button"}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
