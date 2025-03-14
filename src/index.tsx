import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './styles/main.css';

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Failed to find root element. Make sure there is a <div id=\"root\"></div> in your HTML."
  );
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);
//const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


