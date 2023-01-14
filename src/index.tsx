import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { MyContext, defaultContext } from "./MyContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyContext.Provider value={defaultContext}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>
);
