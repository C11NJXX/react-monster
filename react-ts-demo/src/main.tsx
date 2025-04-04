import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./1. Component Props Typing/App";
// import App from "./1. Component Props Typing/exercise/App";
// import App from "./5. useState Types/App";
// import App from "./5. useState Types/exercise/App";
// import App from "./6. useRef, Forms, Events/App";
// import App from "./7. Context API/App";
// import App from "./8. useReducer/App";
import App from "./9. useEffect/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
