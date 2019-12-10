import React from 'react';
import Square from './Square'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ['white','white','white','white']
    }
    this.smallTime = this.smallTime.bind(this);
    this.partyDj = this.partyDj.bind(this);
    this.proOne = this.proOne.bind(this);
    this.proTwo = this.proTwo.bind(this);
    this.btOne = this.btOne.bind(this);
    this.btTwo = this.btTwo.bind(this);
    this.btThree = this.btThree.bind(this);
    this.btFour = this.btFour.bind(this);
  }

  smallTime() {
    this.setState(prevState => {
      if (prevState.colors[0] !== "black"){
        return {
          colors: ['black','black','black','black']
        }
      } else if (prevState.colors[0] !== "white") {
        return {
          colors: ['white','white','white','white']
        }
      }
    })
  } 

  partyDj() {
    this.setState(prevState => {
      if (prevState.colors[0] !== "purple") {
        return {
          colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
        }
      } else {
        return {
          colors: ['white','white','white','white']
        }
      }
    })
  }

  proOne() {
    this.setState(prevState => {
      if (prevState.colors[2] === "blue") {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      } else {
        return {
          colors: [prevState.colors[0], prevState.colors[1], 'blue', prevState.colors[3]]
        }
      }
    })
  }

  proTwo() {
    this.setState(prevState => {
      if (prevState.colors[3] === "blue") {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      } else {
        return {
          colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'blue']
        }
      }
    })
  }
  
  btOne() {
    this.setState(prevState => {
      if (prevState.colors[0] !== "pink") {
        return {
          colors: ['pink', prevState.colors[1], prevState.colors[2], prevState.colors[3]]
        }
      } else {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      }
    })
  }
       

  btTwo() {
    this.setState(prevState => {
      if (prevState.colors[1] !== "green") {
        return {
          colors: [prevState.colors[0], 'green', prevState.colors[2], prevState.colors[3]]
        }
      } else {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      }
    })
  }

  btThree() {
    this.setState(prevState => {
      if (prevState.colors[2] !== "yellow") {
        return {
          colors: [prevState.colors[0], prevState.colors[1], 'yellow', prevState.colors[3]]
        }
      } else {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      }
    })
  }

  btFour() {
    this.setState(prevState => {
      if (prevState.colors[3] !== "magenta") {
        return {
          colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'magenta']
        }
      } else {
        return {
          colors: ['white', 'white', 'white', 'white']
        }
      }
    })
  }

  render(){
    const squares = this.state.colors.map(color => <Square color={color} />)
    return (
      <div className="gridContainer">
        {squares}
        <button onClick={this.smallTime} className="button">Small Time</button>
        <button onClick={this.partyDj} className="button">Party DJ</button>
        <button onClick={this.proOne} className="splitButton">Pro 1</button>
        <button onClick={this.proTwo} className="splitButton">Pro 2</button>
        <button onClick={this.btOne} className="splitButton">BT 1</button>
        <button onClick={this.btTwo} className="splitButton">BT 2</button>
        <button onClick={this.btThree} className="splitButton">BT 3</button>
        <button onClick={this.btFour} className="splitButton">BT 4</button>
      </div>
    );
  }
}

export default App;

