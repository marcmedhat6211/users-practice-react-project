import Card from "../UI/Card";
import User from "./User";
import "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </Card>
  );
};

export default UsersList;
