import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./HomePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
