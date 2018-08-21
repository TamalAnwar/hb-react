import React, { Component } from 'react';
import Square from './Square';

export default class App extends Component {
  state = {
    width: 10,
    height: 10
  };

  renderRows = (num, height) => {
    let item = [];

    // Render each rows of squares, render X rows
    for (let index = 0; index < height; index++) {}

    for (let index = 0; index < num; index++) {
      item.push(<Square />);
    }
    return <div className="rows">{item}</div>;
  };

  render() {
    return (
      <div className="game-board">
        {this.renderRows(this.state.width)}
        <div className="rows">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="rows">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="rows">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}
