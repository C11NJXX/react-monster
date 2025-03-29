import Child from "./components/Child";

const App = () => {
  return (
    <Child>
      <h1>I'm wrapped by Child component</h1>
      <p>Use a property called children to get us !</p>
    </Child>
  );
};

export default App;
