import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Weather from "./Weather";

ReactDOM.render(
  <React.StrictMode>
    <Weather defaultCity="Milan" />
  </React.StrictMode>,
  document.getElementById("root")
);
