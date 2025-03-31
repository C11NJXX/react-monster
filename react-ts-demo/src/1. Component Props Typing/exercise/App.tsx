import Button from "./Components/Button";
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
    </div>
  );
};

export default App;
