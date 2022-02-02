import React, {Component} from 'react';
import Die from "./Die"
import "./RollDice.css";

 class DiceRoll extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
      };
      constructor(props) {
          super(props);
          this.state={die1: "one", die2:"one", rolling :false, totalScore: 0};
          this.roll=this.roll.bind(this);
      }
      
      roll() {
        const newDie1 = this.props.sides[
          Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
          Math.floor(Math.random() * this.props.sides.length)
        ];
        
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });
        setTimeout(() => {
          this.setState({ rolling: false });
        }, 1000);
      }
      render() {
        return (
          <div className='diceroll'>
            <div className='diceroll-container'>
              <Die face={this.state.die1} rolling={this.state.rolling} />
              <Die face={this.state.die2} rolling={this.state.rolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.rolling}>
              {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
            <h2>Total Score: {this.state.totalScore}</h2>
          </div>
        );
      }
    }
    
// console.log(die1)
    export default DiceRoll;