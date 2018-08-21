import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    return (
      <div className="square">
        {this.props.toad ? <img src="/assets/toad.png" alt="Mashroom" /> : null}

        {this.props.mario ? <img src="/assets/mario.png" alt="Mario" /> : null}
      </div>
    );
  }
}
