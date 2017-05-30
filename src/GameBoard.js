
import React from 'react';

const isNextLetter = (example, beginning, letter) => {
  if (example.length === beginning.length) return false
  if (example[beginning.length] === letter) return true
  return false
}

class GameBoard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      letters: "",
      selectedWord: "koira",
      match: false
    };
  }

  componentDidMount() {
    this.setState({selectedWord: this.props.selectedWord})
  }

 handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    console.log('TYHJENNYS! ')
    this.setState({letters: ""})
    document.getElementById("one").value = ""
  } else {
    let isMatch = isNextLetter(
      this.state.selectedWord,
      this.state.letters,
      event.key
    )
    this.setState({match: isMatch})
    if (isMatch) {
      this.setState({letters: this.state.letters + event.key})
    }
  }
}

  render() {
    return (
        <div>
           <input type="text" id="one" onKeyPress={this.handleKeyPress} />
           <p id='kirjoitettu'>{this.state.selectedWord} = {this.state.letters}</p>
           <p>{this.state.match ? ':-)' : ':-('}</p>
           <p>{this.state.selectedWord === this.state.letters ? 'RATKAISTU!' : '...'}</p>
        </div>
    );
  }
};
 
export default GameBoard;