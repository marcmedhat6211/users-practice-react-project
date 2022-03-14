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

/**
 * FRAGMENTS:
 *  Fragments are used to make the code cleaner
 *  it allows you to overcome the react issue of having one root element in each component
 */

/**
 * REACT PORTALS:
 *  React portals is all about making your code cleaner and symantically right
 *  it allows you to choose a place in your html document where you want to add the part you want to add
 *  it's usually used with error messages, modals, etc..
 *  the components that are generally used over the whole application
 */
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
