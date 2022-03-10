import React, { useState } from "react";
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

  return (
    <div>
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
    </div>
  );
};

export default NewUserForm;
