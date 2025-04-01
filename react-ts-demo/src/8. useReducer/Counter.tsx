import { useReducer } from "react";

interface stateShape {
  count: number;
}

const initialState: stateShape = { count: 0 };

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: stateShape, action: Action): stateShape => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
