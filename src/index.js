import React from "react";
import ReactDOM from "react-dom";
import App from "./component/gameBoard.jsx";
import "./component/styles/styles.css";
import { HashRouter, Route, Switch } from "react-router-dom";

// ReactDOM.render(<HashRouter basename={process.env.PUBLIC_URL}>< App /></HashRouter>, 
//     document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));