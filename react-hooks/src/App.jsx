import ComponentA from "./hooks/useContext/ComponentA";

import { createContext } from "react";
export const Data = createContext();

const App = () => {
  const name = "C_11nJxx";
  return (
    <Data.Provider value={name}>
      <ComponentA />
    </Data.Provider>
  );
};

export default App;
