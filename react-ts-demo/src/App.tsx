import Child from "./Components/Child";
import Person from "./Components/Person";
import User from "./Components/User";

const App = () => {
  return (
    <div>
      <User name="C_11nJxx" age={21} isStu={true} />
      <Child>
        <p>I'm passed as a prop named "children" with type: ReactNode</p>
      </Child>
      <Person name="Yva Cadenza" age={21} job="Developer" />
    </div>
  );
};

export default App;
