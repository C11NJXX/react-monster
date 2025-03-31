import Button from "./Components/Button";
import UserInfo from "./Components/UserInfo";
const App = () => {
  return (
    <div>
      <Button
        label="Click Me"
        onClick={() => {
          alert("Clicked");
        }}
        disabled={false}
      />
      <Button label="I'm disabled" disabled={true} />
      <UserInfo id="1" name="Alex" email="alex@abc.com" />
    </div>
  );
};

export default App;
