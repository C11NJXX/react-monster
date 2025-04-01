import { createContext, FC, ReactNode, useState } from "react";

interface MyContextShape {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextShape>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyContextProviderShape {
  children: ReactNode;
}

const MyContextProvider: FC<MyContextProviderShape> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
