import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import classes from "./NewUserForm.module.css";
import errorMessageclasses from "../UI/ErrorMessage.module.css";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeUsernameHandler = (enteredUsername) => {
    setUsername(enteredUsername);
  };

  const changeAgeHandler = (enteredAge) => {
    setAge(enteredAge);
  };

  const validateForm = () => {
    let returnedObject = {
      valid: true,
      message: null,
    };

    if (username.length === 0) {
      returnedObject.valid = false;
      returnedObject.message = "Username is required";
    }

    if (age.length === 0) {
      returnedObject.valid = false;
      returnedObject.message = "Age is required";
    }

    if (username.length === 0 && age.length === 0) {
      returnedObject.valid = false;
      returnedObject.message = "Username and age are required";
    }

    if (age < 0) {
      returnedObject.valid = false;
      returnedObject.message = "Can't enter a negative value for the age";
    }

    return returnedObject;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid.valid) {
      const userData = {
        id: Math.random().toString(),
        name: username,
        age: age,
      };
      props.onSubmitUserForm(userData);
      setUsername("");
      setAge("");
    } else {
      setIsValid(false);
    }
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
      <Button type="submit">Add User</Button>
      <ErrorMessage messageText="Error here" show={!isValid} />
    </form>
  );
};

export default NewUserForm;
