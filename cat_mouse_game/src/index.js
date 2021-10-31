import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';

function Token(props) {
  return (
    <div key={props.value + "-token"}> 
      <button id={props.value + "-btn"} className="token-btn" >
        <div id={props.value + "_overlay"} className="overlay"><img id={props.value + "_overlay"} src={props.correctAnswer === props.value ? ("/images/good.png") : "/images/bad.png"} alt="result"/></div>
        <img id={props.value} src={"/images/tokens/" + props.value + "_btn.png"} alt={props.value} onClick={props.answerSelected ? () => {} : props.onClick}/>
      </button>
    </div>
  );
  
}

function Card(props) {
  return (
    <div className="card" key={props.value + "-card"}> 
      <img id={props.value + "-card"} src={props.value} alt="current_card" onClick={props.onClick}/>
    </div>
  );
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: 0,
      answerSelected: false,
      correctAnswer: "",
      showAnswer: false,
    };
  }

  handleClick = (e) => {
    let btn = e.target.id;
    console.log("I clicked " + btn);
    let cardName = this.props.deck[this.state.cardNumber];
    const overlay = document.getElementById(btn + '_overlay');
    overlay.classList.add('active-overlay');
    this.setState({answerSelected: true});
    var answer = cardName.substring(
      cardName.lastIndexOf("_") + 1, 
      cardName.lastIndexOf(".")
    );
    this.setState({correctAnswer: answer});
    setTimeout(() => {
      this.setState({showAnswer: true});
    }, 500);
    setTimeout(() => {
      this.handleCardClick();
    }, 3000);
    if(btn === answer) {
      console.log("I got it right!");
      this.props.updateScore();
    } else {
      console.log("I got it wrong!");
    }
  }

  handleCardClick = () => {
    console.log("CHANGING CARD");
    const nextCardNumber = this.state.cardNumber+1;
    this.setState({showAnswer: false, cardNumber: nextCardNumber, answerSelected: false});
    const overlays = document.getElementsByClassName('active-overlay');
    [...overlays].forEach((el) => el.classList.remove('active-overlay'));
  }
  // handleCardClick(e) {
  //   console.log("CHANGING CARD");
  //   const nextCardNumber = this.state.cardNumber+1;
  //   this.setState({cardNumber: nextCardNumber});
  // }

  renderToken(tokenName) {  
    return (
      <Token 
        value={tokenName} 
        onClick={(e) => this.handleClick(e)}
        answerSelected={this.state.answerSelected}
        correctAnswer={this.state.correctAnswer}
      />
    );
  }

  render() {
    const tokens = ["mouse", "cat", "cheese", "ball", "pillow"];
    var tokensList = tokens.map((token) => this.renderToken(token));

    return (
      <div className="board-row">
        <div className="game-field">
          <Card 
            value={"/images/front/" + this.props.deck[this.state.cardNumber]}
            onClick={this.handleCardClick}
          />
        </div>
        <div>
        <div className="game-info">
          <div id="score"> 
            Score: {this.props.score}
          </div>
          <div id="answer"> 
            Correct answer:
          </div>
          
          <div className="answer">
            {this.state.showAnswer ? 
            <Card 
              value={"/images/back/" + this.state.correctAnswer + ".png"}
              onClick={this.handleCardClick}
            /> : ""}
            
          </div>
        </div>
        </div>
        <div>
          {tokensList}
        </div>
      </div>
    );
  }
}
const getShuffledPile = arr => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr
};

function getPile(pileSize, pileName) {
  let pile = [];
  for (let i = 0; i < pileSize; i++) {
    pile.push("catmouse" + (i + 1) + "_" + pileName + ".png");
  }
  pile = getShuffledPile(pile);
  return pile;
}

function getShuffledDeck() {
  let deck = [];
  let pileSizes = [10, 13, 11, 11, 11];
  let deckSize = 56; // add up all pile sizes
  let pileNames = ["mouse", "cat", "cheese", "ball", "pillow"];
  let piles = [];
  for (let i = 0; i < 5; i++) {
    piles.push(getPile(pileSizes[i], pileNames[i]))
  }
  let prevAnswer = "";
  let j = Math.floor(Math.random() * 5); // 0 to 4 as how many different answers
  let currIndexes = [0, 0, 0, 0, 0];
  for (let i = 0; i < deckSize; i++ ) {
    while(pileNames[j] === prevAnswer) {
      j = Math.floor(Math.random() * 5);
    }
    
    deck.push(piles[j][currIndexes[j]]);

    if (currIndexes[j] === piles[j].length - 1) {
      piles[j] = getShuffledPile(piles[j]);
    }
    currIndexes[j] = (currIndexes[j] + 1) % piles[j].length;
    prevAnswer = pileNames[j];
  }
  return deck;
}

class CatMouseGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: getShuffledDeck(),
      score: 0,
      bigMode: false,
    }
  }

  updateScore() {
    console.log("Updating score");
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            deck={this.state.deck}
            updateScore={() => this.updateScore()}
            score={this.state.score}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <HashRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
    <CatMouseGame />
  </HashRouter>,
  document.getElementById('root')
);
