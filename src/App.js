import React, { Component } from 'react';
import Square from './Square';

export default class App extends Component {
  state = {
    width: 5,
    height: 5,
    toadOnBoard: 0
  };

  moveMario = (e) => {
    console.log('Hello');
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

  renderMario = (count, rowKey) => {
    let x = Math.floor(this.state.width / 2);
    let y = Math.floor(this.state.height / 2);
    if (count === x && rowKey === y) {
      console.log('Rendering mario');
      return true;
    } else {
      return false;
    }
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

  renderSquares = (num, rowKey) => {
    let item = [];
    let count = 0;
    for (let index = 0; index < num; index++) {
      item.push(
        <Square
          toadOnBoard={this.state.toadOnBoard}
          toad={this.renderToad()}
          mario={this.renderMario(count, rowKey)}
          key={`${rowKey}${count}`}
        />
      );
      count++;
    }

    return (
      <div className="rows" key={rowKey}>
        {item}
      </div>
    );
  };

  componentWillMount() {
    let width = prompt('Number of rows?');
    let height = prompt('Number of cols?');
    this.setState({ width, height });
  }

  render() {
    return (
      <div onKeyPress={this.moveMario} className="game-board">
        {this.renderRows(this.state.width, this.state.height)}
      </div>
    );
  }
}
