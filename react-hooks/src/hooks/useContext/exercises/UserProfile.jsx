import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <h1>
      My name is {user.name}, I'm {user.age} years old.
    </h1>
  );
};

export default UserProfile;
