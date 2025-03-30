import { useRef } from "react";

const UseRef = () => {
  const inputElement = useRef(null);

  return (
    <>
      <input type="text" ref={inputElement} />
      <button
        onClick={() => {
          inputElement.current.focus();
          inputElement.current.value = "Hello World!";
        }}
      >
        Click me to focus and write something
      </button>
    </>
  );
};

export default UseRef;
