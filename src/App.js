import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pikkusanasto from './data/pikkudata.json';
import isosanasto from './data/iso_sanasto.json';
import GameBoard from './GameBoard.js';

const testData = pikkusanasto
const sanasto = isosanasto

const randomWordFromArray = (wordArray) => {
  var max = wordArray.length
  var rndIndex = Math.floor(Math.random() * max)
  return wordArray[rndIndex]
}

// const maxLenght = (word, letterCount) => {
//   return word.length <= letterCount
// }

// const filterArrayByExactLength = (wordArray, letterCount) => {
//   return wordArray.filter((word) => { return word.length === letterCount})
// }

const filterArrayByLength = (wordArray, letterCount) => {
  return wordArray.filter((word) => { return word.length <= letterCount})
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {randomWord: randomWordFromArray(sanasto.sanalista)}
  }

  componentWillMount() {
    this.shortList = filterArrayByLength(testData.sanalista, 5)

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.shortList.map((sana) =>
          <li key={sana}>{sana}</li>)}
        <p>
        Sanoja löytyy listasta {sanasto.sanalista.length} kappaletta.
        </p>
        <p>
        Satunnainen sana on {this.state.randomWord}.
        </p>
        <GameBoard selectedWord={this.state.randomWord}/>
      </div>
    );
  }
}

export default App;
