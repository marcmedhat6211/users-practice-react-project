import Button from "./Button";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={classes["error-message-container"]}>
      <p className={classes["message-text"]}>{props.message}</p>
      <Button type="button" onClick={props.onConfirm}>
        Okay
      </Button>
    </div>
  );
};

export default ErrorMessage;
