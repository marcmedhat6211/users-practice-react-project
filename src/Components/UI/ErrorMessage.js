import React, { useState } from "react";
import Button from "./Button";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const dismissMessageHandler = () => {
    setShowMessage(false);
  };

  return (
    <div
      className={`${classes["error-message-container"]} ${
        (showMessage || props.show) && classes.show
      }`}
    >
      <p className={classes["message-text"]}>{props.messageText}</p>
      <Button type="button" onClick={dismissMessageHandler}>
        Okay
      </Button>
    </div>
  );
};

export default ErrorMessage;
