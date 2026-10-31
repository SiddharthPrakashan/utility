import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@styles/globals.css";
import App from "@ig-followers-check/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
