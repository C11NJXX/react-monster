import { Suspense } from "react";
import FetchData from "./FetchData";

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <FetchData />
      </Suspense>
    </>
  );
};

export default App;
