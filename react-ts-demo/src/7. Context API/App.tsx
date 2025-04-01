import Counter from "./Counter";
import MyContextProvider from "./MyContext";
const App = () => {
  return (
    <MyContextProvider>
      <Counter />
    </MyContextProvider>
  );
};

export default App;
