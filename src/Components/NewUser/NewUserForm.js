import React, { useState, useRef } from "react";
// import React, { useState, Fragment } from "react"; //you can import the fragment here and use it down with the name of Fragment only
import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  /**
   * REFS:
   *  Refs are a react Hook
   *  Refs are used to connect your actual HTML DOM element to your js code
   *  you do that by fulfilling several steps
   *  you call the useRef() method and you give it a default value
   *  it returns a value, which always has a current object which by its turn has a value property inside like every HTML DOM element
   *  IMPORTANT: rarely or never use refs to manipulate a DOM element, let react handles the DOM manipulation
   *  we did manipulate it here by setting the inputs to emty strings, but a small thing like this is okay though
   *
   * IMPORTANT TO NOTE:
   *  in this case, the inputs are uncontrolled inputs, why ?
   *    because the input value is not controlled by react, we just fetch the data using refs but we never feed that input back again with that data
   *    of cource we're using that work around using refs to change the value, but that still is us manipulating the actual DOM element, and not through react!
   *
   * STATE VS REFS:
   *  Use the State hook if you want to change something on the screen
   *  Use Refs hook if you want to just collect data from an input or something like that (like we're doing in that case)
   */
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const changeUsernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const changeAgeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const confirmErrorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        message: "Invalid Inputs, Inputs can't be empty",
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        message: "Invalid Age Input, Age can't be less than one (1)",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onSubmitUserForm(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          // value={username}
          // onChange={changeUsernameHandler}
          inputRef={nameInputRef}
        />
        <Input
          label="Age (Years)"
          type="number"
          // value={age}
          // onChange={changeAgeHandler}
          inputRef={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
      {/* // </Wrapper> */}
    </React.Fragment>
  );
};

export default NewUserForm;
