import ComponentA from "./hooks/useContext/ComponentA";

import { createContext } from "react";
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "C_11nJxx";
  const age = 21;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <ComponentA />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default App;
