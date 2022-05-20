import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {BrowserApp} from "BrowserApp";

const root = ReactDOM.createRoot(document.getElementById("react-app") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserApp />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
