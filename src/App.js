import UsersList from "./Components/User/UsersList";
import NewUser from "./Components/NewUser/NewUser";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <NewUser />
      <UsersList />
    </div>
  );
}

export default App;
