import React, { Component } from "react";
 
// function to get a random position for the apple
const getRandomPosition = () => {
    let min = 1;
    let max = 96;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x, y]
}
export default class SnakeGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snakeDots: [
                [0,0]
            ],
            food: getRandomPosition(),
            direction : "RIGHT",
            speed: 100,
        }
        this.onkeydown = this.onkeydown.bind(this)
        this.moveSnake = this.moveSnake.bind(this)
        this.checkIfOut = this.checkIfOut.bind(this)
        this.checkItself = this.checkItself.bind(this)
        this.eatApple = this.eatApple.bind(this)
        this.growSnake = this.growSnake.bind(this)
}
        onkeydown(e) {
            e = e || window.event;
            switch(e.keyCode){
                case 37: 
                this.setState({direction : "LEFT"});
                break;
                case 38: 
                this.setState({direction : "UP"});
                break;
                case 39: 
                this.setState({direction : "RIGHT"});
                break;
                case 40: 
                this.setState({direction : "DOWN"});
                break;
                case 80: 
                this.setState({direction : "PAUSE"});
                break;
            }
        }

componentDidMount() {
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onkeydown
}

componentDidUpdate() {
    this.checkIfOut()
    this.checkItself()
    this.eatApple()
}

moveSnake() {
    let dots = [...this.state.snakeDots]
    let head = dots[dots.length - 1]
    switch (this.state.direction) {
        case "RIGHT":
            head = [head[0] + 2, head[1]]
            break;
        case "LEFT":
            head = [head[0] - 2, head[1]]
            break; 
        case "DOWN":
            head = [head[0], head[1] + 2]
            break;  
        case "UP":
            head = [head[0], head[1] - 2]
            break;        
    }
    dots.push(head)
    dots.shift();
    this.setState({
      snakeDots: dots
    })
}

checkIfOut() {
    let head = this.state.snakeDots[this.state.snakeDots.length-1]
    if (head[0] >= 96.1|| head[1] >= 96.1 || head[0] < 0 || head[1] < 0) {
        this.gameOver();
    }
}

checkItself() {
    let body = [...this.state.snakeDots];
    let head = body[body.length-1]
    body.pop();
    body.forEach(dot => {
        if(head[0] === dot[0] && head[1] === dot[1]){
            this.gameOver()
        }
    })
}

eatApple() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]){
        this.setState({food: getRandomPosition()})
        this.growSnake()
    }
}

growSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
        snakeDots:newSnake
    })
}
gameOver() {
    alert(`Game Over. Score is ${this.state.snakeDots.length}`)
    this.setState({
        snakeDots: [
            [0,0]
        ],
        food: getRandomPosition(),
        direction : "RIGHT",
        speed: 100
    })
}

render() {
  return (
      <div>
           <h1 className="gameTitle">Snake Game</h1>
           <div className="snake-container">
            <Snake snakeDots={this.state.snakeDots}/>
            <Apple dot={this.state.food} />
           </div>
      </div>
    )
   }
}

const Snake = (props) => {
    return (
      <div>
        {props.snakeDots.map((dot, i) => {
            const style = {
                left: `${dot[0]}%`,
                top: `${dot[1]}%`
            }
            return (
                <div className="snake-dot" key={i} style={style}></div>
            )
        })}  
      </div>
    )
}

const Apple = (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return (
        <div className="apple" style={style}>
             
        </div>
    )
}