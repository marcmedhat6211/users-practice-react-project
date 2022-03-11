import React, { useState } from "react";
// import React, { useState, Fragment } from "react"; //you can import the fragment here and use it down with the name of Fragment only
import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const changeUsernameHandler = (enteredUsername) => {
    setUsername(enteredUsername);
  };

  const changeAgeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const confirmErrorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        message: "Invalid Inputs, Inputs can't be empty",
      });
      return;
    } else if (age < 1) {
      setError({
        message: "Invalid Age Input, Age can't be less than one (1)",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };
    props.onSubmitUserForm(userData);
    setUsername("");
    setAge("");
    setError(null);
  };

  /**
   * This here is a solution for the problem JSX code arrises
   *    The problem is that jsx code only allows one root element per component
   *    you can work around that by just wrapping the component with a div or any other html element, but that's not very ideal nor a very good practice
   *    why ? because in a big application you will end up having a lot of nested divs that are not used, and that is not a good practice and is symantically wrong and can cause styling issues with css selectors
   */

  /**
   * A work around that, is creating a wrapper component which only returns the props.children
   */
  return (
    // <Wrapper>
    <React.Fragment>
      {error && (
        <ErrorMessage message={error.message} onConfirm={confirmErrorHandler} />
      )}
      <form className={classes["new-user-form"]} onSubmit={formSubmitHandler}>
        <Input
          label="Username"
          type="text"
          value={username}
          onChangeInput={changeUsernameHandler}
        />
        <Input
          label="Age (Years)"
          type="number"
          value={age}
          onChangeInput={changeAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
      {/* // </Wrapper> */}
    </React.Fragment>
  );
};

export default NewUserForm;
