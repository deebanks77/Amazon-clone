import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./StateProvider/StateProvider";
import { reducer, initialState } from "./StateProvider/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider reducer={reducer} initialState={initialState}>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
