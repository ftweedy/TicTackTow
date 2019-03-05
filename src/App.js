import React, { Component } from 'react';
import './App.css';

import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="board">
      <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
