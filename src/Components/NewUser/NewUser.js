import React, { useState } from "react";
import Card from "../UI/Card";
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const submitUserFromHandler = (entereduserData) => {
    props.onAddingNewUser(entereduserData);
  };

  return (
    <Card>
      <NewUserForm onSubmitUserForm={submitUserFromHandler} />
    </Card>
  );
};

export default NewUser;
