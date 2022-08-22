import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./router/App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
