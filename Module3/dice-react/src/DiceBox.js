import React, {Component} from "react"
import Die from "./Die"

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0
        }
        this.dieRoll = this.dieRoll.bind(this)
    }

    dieRoll() {
        this.setState(() => {
            return {
                num1: this.rollFunc(),
                num2: this.rollFunc(),
                num3: this.rollFunc(),
                num4: this.rollFunc(),
                num5: this.rollFunc()
            }
        })
    }

    rollFunc() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    render() {
        return (
        <div className='diceBoxContainer'>
            <Die num={this.state.num1}/>
            <Die num={this.state.num2}/>
            <Die num={this.state.num3}/>
            <Die num={this.state.num4}/>
            <Die num={this.state.num5}/>
            <h2 className="totalRoll">Your total roll is {this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5}</h2>
            <button className='rollDice'onClick={this.dieRoll}>Roll Dice</button>
        </div>
        )
    }
}

export default DiceBox