import React, { Component } from 'react';
import Square from './Square';

export default class App extends Component {
  state = {
    width: 3,
    height: 3
  };

  renderRows = (width, height) => {
    let rows = [];
    let rowKey = 0;
    for (let index = 0; index < height; index++) {
      rows.push(this.renderSquares(width, rowKey));
      rowKey++;
    }
    return <div className="board">{rows}</div>;
  };

  renderSquares = (num, key) => {
    let item = [];
    let count = 0;
    for (let index = 0; index < num; index++) {
      item.push(<Square key={`${key}${count}`} />);
      count++;
    }

    return (
      <div className="rows" key={key}>
        {item}
      </div>
    );
  };

  render() {
    return (
      <div className="game-board">
        {this.renderRows(this.state.width, this.state.height)}
      </div>
    );
  }
}
