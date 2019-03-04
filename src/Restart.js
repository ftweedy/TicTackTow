import React, { Component } from 'react';
import './App.css';

class Restart extends Component {
    clickHandler = () => {
        this.props.re()
    }

  render() {
    return (
      <div onClick={this.clickHandler}>
        Restart
      </div>
    );
  }
}

export default Restart;
