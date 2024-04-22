import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import calcStore from "./store/calc_store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={calcStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
