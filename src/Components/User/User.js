import UserCard from "../UI/UserCard";
import classes from "./User.module.css";

const User = (props) => {
  return (
    <UserCard className={classes.user}>
      <p className={classes["user-text"]}>
        {props.name} ({props.age} years old)
      </p>
    </UserCard>
  );
};

export default User;
