import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./ducks/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./router/App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
