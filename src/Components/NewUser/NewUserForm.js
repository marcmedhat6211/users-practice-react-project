import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./NewUserForm.module.css";

const NewUserForm = () => {
  return (
    <form className={classes["new-user-form"]}>
      <Input label="Username" type="text" />
      <Input label="Age (Years)" type="number" />
      <Button type="submit" buttonText="Add User" />
    </form>
  );
};

export default NewUserForm;
