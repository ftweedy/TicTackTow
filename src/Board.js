import React, { Component } from 'react';
import './App.css';

import Square from './Square'
import Restart from './Restart'

import oo from './O.png'
import xx from './X.jpg'
import blank from './Blank.png'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: [blank,blank,blank, blank,blank,blank, blank,blank,blank],
            turn: "O",
            end: 1,
            victory: "",
            check: [blank,blank,blank, blank,blank,blank, blank,blank,blank]
        }
    }

    mark = (id) => {
        let {squares, check, turn, end, victory} = this.state
        if (end === 1){
            if (squares[id] === blank){
                if (turn === "O"){
                    squares[id] = oo;
                    check[id] = "o"
                    turn = "X";
                } else {
                    squares[id] = xx;
                    check[id] = "x"
                    turn = "O"
                }
            }
            //check horizontal, vertical, and diagonals for victory
            for(let i = 0; i <= 6; i += 3){
                if (check[i] + check[i+1] + check[i+2] === "ooo"){
                    victory = "Victory to O!"
                    end = 0
                } else if (check[i] + check[i+1] + check[i+2] === "xxx"){
                    victory = "Victory to X!"
                    end = 0
                }
            }
            for(let i = 0; i <= 2; i ++){
                if (check[i] + check[i+3] + check[i+6] === "ooo"){
                    victory = "Victory to O!"
                    end = 0
                } else if (check[i] + check[i+3] + check[i+6] === "xxx"){
                    victory = "Victory to X!"
                    end = 0
                }
            }
            if (check[0] + check[4] + check[8] === "ooo"){
                victory = "Victory to O!"
                end = 0
            }else if (check[0] + check[4] + check[8] === "xxx"){
                victory = "Victory to X!"
                end = 0
            } else if (check[2] + check[4] + check[6] === "ooo"){
                victory = "Victory to O!"
                end = 0
            } else if (check[2] + check[4] + check[6] === "xxx"){
                victory = "Victory to X!"
                end = 0
            }
       }
       if (!squares.includes(blank) && end === 1){
           victory = "No winner"
           end = 0
       }
        this.setState( {squares: squares, check:check, turn: turn, end:end, victory:victory} )
    }

    restart = () => {
        let {squares, check, turn, end, victory} = this.state
        squares = squares.map(input => {
            return blank
        })
        check = check.map(input => {
            return blank
        })
        end = 1
        victory = ""
        turn = "O"
        this.setState( {squares:squares, check:check, turn:turn, end:end, victory:victory} )
    }

  render() {
      let {squares, count} = this.state
    return (
      <div>
      <table>
          <tbody>
              <tr>
                  <td>
                      {this.state.victory}
                  </td>
                  <td>
                      <Restart re={this.restart}/>
                  </td>
              </tr>
          </tbody>
      </table>
      <br/>
        {squares.map((squareValue, index)=>{
            return(
                <Square unique={index} squares={squareValue} mark={this.mark}/>
            )
        })}
      </div>
    );
  }
}

export default Board;
