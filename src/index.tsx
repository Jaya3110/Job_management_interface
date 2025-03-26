import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Assignment } from "./screens/Assignment/Assignment";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Assignment />
  </StrictMode>,
);
