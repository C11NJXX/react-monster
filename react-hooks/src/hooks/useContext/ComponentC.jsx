import { Data, Data1 } from "../../App";
import { useContext } from "react";
const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h1>
        My name is {name}, I' m {age} years old.
      </h1>
    </>
  );
};

export default ComponentC;
