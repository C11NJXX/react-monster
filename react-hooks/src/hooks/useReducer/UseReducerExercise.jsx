import { useReducer, useState } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  const { type, operateNum } = action;
  switch (type) {
    case "increment":
      return { ...state, count: state.count + +operateNum };
    case "decrement":
      return { ...state, count: state.count - operateNum };
    case "reset":
      return { ...state, count: 0 };
  }
};

const UseReducerExercise = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [operateNum, setOperateNum] = useState(0);
  return (
    <>
      <h1>Count : {state.count}</h1>
      <input
        type="text"
        value={operateNum}
        onChange={(e) => {
          setOperateNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "increment", operateNum });
        }}
      >
        +{operateNum}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", operateNum });
        }}
      >
        -{operateNum}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </>
  );
};

export default UseReducerExercise;
