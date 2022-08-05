import React from "react";
import { createRoot } from "react-dom/client";
import GlobalCssSlider from "./LoginScreens/GlobalCssSlider";
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalCssSlider />
  </React.StrictMode>
); 