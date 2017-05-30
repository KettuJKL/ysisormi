
import React from 'react';

class GameBoard extends React.Component {
componentDidMount() {
    this.letters = "";
}

 handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    console.log('TYHJENNYS! ')
    this.letters = ""
    document.getElementById("one").value = ""
  } else {
    this.letters += event.key
    console.log(this.letters)
  }
}

  render() {
    return (
        <div>
           <input type="text" id="one" onKeyPress={this.handleKeyPress} />
           <p id='kirjoitettu'>{this.letters}</p>
        </div>
    );
  }
};
 
export default GameBoard;