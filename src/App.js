import React, { Component } from 'react';
import Square from './Square';

export default class App extends Component {
  state = {
    width: 10,
    height: 10,
    toadOnBoard: 0
  };

  renderToad = () => {
    if (this.state.toadOnBoard < this.state.width) {
      let num = Math.random();
      if (num > 0.9) {
        console.log('rendering a toad');
        return true;
      }
    }
    return false;
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
      item.push(
        <Square toad={this.renderToad()} mario={false} key={`${key}${count}`} />
      );
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
