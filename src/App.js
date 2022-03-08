import React, { useState } from "react";
import UsersList from "./Components/User/UsersList";
import NewUser from "./Components/NewUser/NewUser";
import classes from "./App.module.css";

const usersList = [
  { id: Math.random().toString(), name: "Marc", age: "29" },
  { id: Math.random().toString(), name: "Ahmed", age: "36" },
];

function App() {
  const [newUsersList, setUsersList] = useState(usersList);

  const newUserHandler = (userData) => {
    setUsersList((prev) => {
      return [userData, ...prev];
    });
  };

  return (
    <div className={classes.app}>
      <NewUser onAddingNewUser={newUserHandler} />
      <UsersList users={newUsersList} />
    </div>
  );
}

export default App;
