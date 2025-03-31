import Button from "./Components/Button";
import UserInfo from "./Components/UserInfo";
import AdminInfo from "./Components/AdminInfo";
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
        email="cya@bbc.com"
        role="CEO"
        lastLogin={new Date()}
      />
    </div>
  );
};

export default App;
