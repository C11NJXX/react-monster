import { useEffect, useState } from "react";

const UseStateExample = () => {
  const [input, setInput] = useState(() => {
    const initialInput = localStorage.getItem("input")
      ? JSON.parse(localStorage.getItem("input"))
      : "";
    return initialInput;
  });

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
  }, [input]);

  return (
    <div>
      <h1>Your input is {input}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setInput("")}>Clear input</button>
    </div>
  );
};

export default UseStateExample;
