import React, { Component } from 'react';
import './App.css';

class Square extends Component {
    clickHandler = () => {
        this.props.al(this.props.unique)
    }

  render() {
    return (
      <div className="square" onClick={this.clickHandler}>
        <img src={this.props.squares}/>
      </div>
    );
  }
}

export default Square;
