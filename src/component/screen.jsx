import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TicTacToe from "./ticTacToe.jsx"
import SnakeGame from "./snakeGame.jsx"
import Hangman from "./hangman.jsx";
import RPS from "./rockPaperScissor.jsx";

const Screen = ({ game }) => {
    return (
    <div id="screen">
       <Router>
    <Route
      exact
      path="/"
      component={() => {
        if (game === 'TicTacToe') {
          return <TicTac />;
        } else if (game === 'SnakeGame') {
          return <Snake />;
        } else if (game === 'Hangman') {
          return <Hang />;
        } else if (game === 'RPS') {
          return <Rock />;
        } else {
          return <Home />
        }
      }}
    />
  </Router>
    </div>
    )
}
function TicTac() {
return (
  <div>
    <TicTacToe />
  </div>
);
}
function Snake() {
  return (
    <div>
      <SnakeGame />
    </div>
  );
  }
function Hang() {
    return (
      <div>
        <Hangman />
      </div>
  );
  }

function Rock() {
  return (
    <div>
      <RPS/>
    </div>
);
}
  
function Home() {
return (
  <div id="main">
    <p>Please Select Your Game</p>
  </div>
);
}

export default Screen;