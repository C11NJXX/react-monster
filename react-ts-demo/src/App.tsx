import Button from "../src/1. Component Props Typing/exercise/Components/Button";
import UserInfo from "../src/1. Component Props Typing/exercise/Components/UserInfo";
import AdminInfo from "./1. Component Props Typing/exercise/Components/AdminInfo";
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
      <AdminInfo
        id="2"
        name="Cya"
        email="aya@bbc.com"
        role="CEO"
        lastLogin={new Date()}
      />
    </div>
  );
};

export default App;
