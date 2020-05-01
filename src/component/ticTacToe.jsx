import React, { useState } from 'react';

// function to check winner 
// array of all possible wins
// iterate through the board to see matching letter 
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

const TicTacToe = () => {
  // hook to set the board with 9 elements
    const [board, setBoard] = useState(Array(9).fill(null));
  // hook to change player's turn
    const [xIsNext, setXisNext] = useState(true);
  // check the winner 
    const winner = calculateWinner(board);

const handleClick = i => {
  const boardCopy = [...board];
  // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    // re-render the board
    setBoard(boardCopy);
    // change player's turn
    setXisNext(!xIsNext);
}
   // if there is a winner render winner else next player's turn
   // start new game will reset the board with 9 elements
    return (
        <div>
            <h1 className="gameTitle">Tic Tac Toe</h1>
            <div className="ticTac-container">
            <Board squares={board} onClick={handleClick} />
          <div className="ticTacToeStyle">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                <button id='ticTacButton' onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
          </div>  
          </div>
        </div>
    )

}

// inline styling for the board 
const styleB = {
    width: '16em',
    height: '16em',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick}) => (
    <div style={styleB}>
       {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

const Square = ({value , onClick}) => (
    <button className="buttonStyle" onClick={onClick}>
        {value}
    </button>
);


export default TicTacToe;