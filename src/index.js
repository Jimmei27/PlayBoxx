import React from "react";
import ReactDOM from "react-dom";
import App from "./component/gameBoard.jsx";
import "./component/styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>
    < App />
    </Router>, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));