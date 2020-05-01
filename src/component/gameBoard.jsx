import React, { useState } from "react";
import Screen from "./screen.jsx"
import moveButton from "./styles/movementButton.png"
import abButton from "./styles/abButton.png"


const GameBoard = () => {
  const [game, setMode] = useState('Main');
    // hook to update the state for the game mode
    return (
      <div className="board">
        <div id="gameButton">
          <button onClick={() => setMode('Main')}>Main  </button>
          <button onClick={() => setMode('TicTacToe')}>Tic Tac Toe</button>
          <button onClick={() => setMode('SnakeGame')}>Snake Game </button>
          <button onClick={() => setMode('Hangman')}>  Hangman  </button>
          <button onClick={() => setMode('RPS')}>  R P S  </button>
        </div>
      <Screen game={game}/>
         <img id="moveButton" src={moveButton} />
         <img id="abButton" src={abButton} />
      </div>
    )
}

export default GameBoard;