import React, { Component } from "react";
import paper from './styles/paper.svg'
import rock from './styles/rock.svg'
import scissors from './styles/scissors.svg'


// function to check each round 
function checkWin(playerChoice, cpuChoice) {
    const rules = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock',
    }
  
    if (playerChoice === cpuChoice) return 'draws'
    if (rules[playerChoice] === cpuChoice) return 'wins';
    else return 'losses';
  }

// function to randomize the cpu's move
function cpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

class rockPaperScissor extends Component {
    constructor() {
        super();
        this.state = {
            wins: 0,
            losses: 0,
            draws: 0,
            currentGameResult: null
        }
    
        this.onPlayerChoiceClick = this.onPlayerChoiceClick.bind(this);
      }
onPlayerChoiceClick(choice) {
const result = checkWin(choice, cpuChoice());

this.setState((prevState) => {
    if (result === 'wins') return { wins: prevState[result] + 1 }
    else if (result === 'draws') return { draws: prevState[result] + 1 }
    else if (result === 'losses') return { losses: prevState[result] + 1 }
});

this.setState({currentGameResult: result});
}
 render() {
  return (
      <div>
           <h1 className="gameTitle">Rock Paper Scissor</h1>
           <div className="rps-container">
           <GameInfo
          wins={this.state.wins}
          losses={this.state.losses}
          draws={this.state.draws}
            />

        <GameButtons
          onPlayerChoiceClick={this.onPlayerChoiceClick}
        />

        <CurrentGame
          currentGameResult={this.state.currentGameResult}
        />
           </div>
      </div>
  )
 }
}

const GameInfo = ({wins, losses, draws}) => (
    <div className='game-info'>
      <div className='rps-text'>
        Wins: {' '}
        <span>{wins}</span>
      </div>
      <div className='rps-text'>
        Draws: {' '}
        <span>{draws}</span>
      </div>
      <div className='rps-text'>
        Losses: {' '}
        <span>{losses}</span>
      </div>
    </div>
  );


const GameButtons = (props) => (
    <div className='game-buttons'>
      <img
        className='rps-button'
        onClick={() => props.onPlayerChoiceClick('rock')}
        src={rock} alt='Rock' />
      <img
        className='rps-button'
        onClick={() => props.onPlayerChoiceClick('paper')}
        src={paper} alt='Paper' />
      <img
        className='rps-button'
        onClick={() => props.onPlayerChoiceClick('scissors')}
        src={scissors} alt='Scissors' />
    </div>
  )


function renderCurrentGameResult(result) {
    if (result === 'wins') {
      return <div className='rps-text'>You won! Play Again.</div>
    } else if (result === 'losses') {
      return <div className='rps-text'>You lost! Play Again.</div>
    } else if (result === 'draws') {
      return <div className='rps-text'>Draw! Play Again.</div>;
    } else {
      return <div className='rps-text'>Start the game by choosing a move.</div>;
    }
  }
  
  const CurrentGame = ({currentGameResult}) => (
    <div className='current-game'>
      {renderCurrentGameResult(currentGameResult)}
    </div>
  );

export default rockPaperScissor;