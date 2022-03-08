import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return <div className={classes["user-card"]}>{props.children}</div>;
};

export default UserCard;
