import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import App from "./1. Component Props Typing/App";
// import App from "./1. Component Props Typing/exercise/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
