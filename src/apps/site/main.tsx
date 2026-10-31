import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@styles/globals.css";
import App from "@site/App";

const root = document.getElementById("root")!;

// Each HTML entry declares which page it renders via data-page.
createRoot(root).render(
  <StrictMode>
    <App page={root.dataset.page} />
  </StrictMode>,
);
