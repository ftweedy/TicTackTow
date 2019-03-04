import React, { Component } from 'react';
import './App.css';

import Square from './Square'
import Restart from './Restart'

import tree from './tree.jpg'
import question from './question.png'
import treasure from './treasure.jpg'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: [question, question, question, question, question, question, question, question, question],
            surprise: Math.floor((Math.random() * 8) + 1),
            count: 9,
            def: 9
        }
    }

    Allert = (id) => {
        let {squares, count} = this.state
        if (count !== 0){
            if (id === this.state.surprise){
                squares[id] = treasure
                alert("you win!")
                count = 0
            } else {
                if(squares[id] === question){
                    squares[id] = tree
                    if(count > 0){
                        count = count - 1
                    }
                    if (count === 0){
                        alert("you lose!")
                    }
                }
            }
        }
        this.setState( {squares: squares, count: count} )
    }

    restart = () => {
        let {squares, surprise, count, def} = this.state
        let random = Math.floor((Math.random() * 8) + 1)
        squares = squares.map(input => {
            return question
        })
        this.setState( {squares: squares, count: def, surprise: random} )
    }

  render() {
      let {squares, count} = this.state
    return (
      <div className="board">
        {squares.map((squareValue, index)=>{
            return(
                <Square unique={index} squares={squareValue} al={this.Allert}/>
            )
        })}
        <table>
            <tbody>
                <tr>
                    <td>
                        {this.state.count} tries left
                    </td>
                    <td>
                        <Restart re={this.restart}/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
