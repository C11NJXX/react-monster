import { useContext } from "react";
import { MyContext } from "./MyContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
