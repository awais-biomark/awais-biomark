import React from "react";
import { createRoot } from "react-dom/client";
import GlobalCssSlider from "./LoginScreens/GlobalCssSlider";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalCssSlider />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


