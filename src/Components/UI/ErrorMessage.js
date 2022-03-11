import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./ErrorMessage.module.css";

const ErrorMessageContainer = (props) => {
  return (
    <div className={classes["error-message-container"]}>
      <p className={classes["message-text"]}>{props.message}</p>
      <Button type="button" onClick={props.onConfirm}>
        Okay
      </Button>
    </div>
  );
};

const ErrorMessage = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ErrorMessageContainer
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay_root")
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
