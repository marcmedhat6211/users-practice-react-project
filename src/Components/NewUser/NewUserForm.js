import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const changeUsernameHandler = (enteredUsername) => {
    setUsername(enteredUsername);
  };

  const changeAgeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };
    props.onSubmitUserForm(userData);
    setUsername("");
    setAge("");
  };

  return (
    <form className={classes["new-user-form"]} onSubmit={formSubmitHandler}>
      <Input
        label="Username"
        type="text"
        onChangeInput={changeUsernameHandler}
      />
      <Input
        label="Age (Years)"
        type="number"
        onChangeInput={changeAgeHandler}
      />
      <Button type="submit" buttonText="Add User" />
    </form>
  );
};

export default NewUserForm;
