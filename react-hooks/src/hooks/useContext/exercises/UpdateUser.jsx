import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState();
  const [newAge, setNewAge] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() && newAge) {
      updateUser({ newName, newAge });
      setNewName("");
      setNewAge("");
    }
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={newName}
          placeholder="C_11nJxx"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="text"
          value={newAge}
          placeholder="21"
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          update
        </button>
      </form>
    </>
  );
};

export default UpdateUser;
