import React, {Component} from 'react';
import DiceRoll from './RollDice';
import './App.css';
import Die from "./Die";

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Die/>
        <DiceRoll/>
        </div>
    );
  }
}

export default App;
