import React, { Component } from "react";
import s0 from "./styles/hm0.png";
import s1 from "./styles/hm1.png";
import s2 from "./styles/hm2.png";
import s3 from "./styles/hm3.png";
import s4 from "./styles/hm4.png";
import s5 from "./styles/hm5.png";
import s6 from "./styles/hm6.png";


let wordArray = [];
const getWord = () => {
  fetch('https://random-word-api.herokuapp.com//word?number=50')
  .then(response => response.json())
  .then(data => {
     wordArray = data
      return(data)});
}
export default class Hangman extends Component {
  static defaultProps = {
    maxWrong : 6,
    images: [s0, s1, s2, s3, s4, s5, s6]
  };
  constructor(props) {
    super(props);
    this.state = {
      mistake : 0,
      guessed : new Set ([]),
      answer : 'superpower'
    }
    this.generateButtons = this.generateButtons.bind(this)
    this.guessWord = this.guessWord.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.randomNumber= this.randomNumber.bind(this)
  }
guessWord() {
    return this.state.answer.split('').map(letter => (this.state.guessed.has(letter) ? letter : " _ "))
}
generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => 
        <button id="hangButton"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}> 
        {letter}
        </button>
    )
}

handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
        guessed : st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }))
}

resetButton = () => {
    this.setState({
        mistake: 0,
        guessed: new Set([]),
        answer: wordArray[this.randomNumber()]
    })
}

componentDidMount() {
  getWord()
}

randomNumber() { return Math.floor((Math.random() * 50)) }

render() {
const gameOver = this.state.mistake >= this.props.maxWrong;
let gameStat = this.generateButtons();
const isWinner = this.guessWord().join('') === this.state.answer
  if (isWinner){
      gameStat = 'You Won!! Play Again!'
  }

  if (gameOver) {
      gameStat = 'You Lost!! Play Again! '
  }
  return (
      <div>
           <h1 className="gameTitle">Hangman</h1>
           <div className="hangman-container">
           <div id="hangText">
           <p> Lives remaining: {this.state.mistake} / {this.props.maxWrong}</p>    
           <button id="hangTextButton" onClick={this.resetButton}> Start </button>
           </div>
           <img id='hangPic' src={this.props.images[this.state.mistake]}/>
            <p> {!gameOver ? this.guessWord() : this.state.answer}</p>
            <p> {gameStat} </p>
           </div>
      </div>
  )
}
}
