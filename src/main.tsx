import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/components/App";

import "@/scss/fonts.scss";
import "@/scss/min-reset.scss";
import "@/index.scss";

const container = document.getElementById("root")!;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
