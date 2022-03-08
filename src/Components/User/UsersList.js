import Card from "../UI/Card";
import User from "./User";
import "./UsersList.module.css";

const usersList = [
  { id: Math.random().toString(), name: "Marc", age: "29" },
  { id: Math.random().toString(), name: "Ahmed", age: "36" },
  { id: Math.random().toString(), name: "Khaled", age: "25" },
  { id: Math.random().toString(), name: "Mina", age: "28" },
  { id: Math.random().toString(), name: "Marina", age: "26" },
];

const UsersList = () => {
  return (
    <Card>
      {usersList.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </Card>
  );
};

export default UsersList;
