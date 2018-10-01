import React, { Component } from 'react';
import './Inspector.css'
import Player from './Player/Player'

class Inspector extends Component {
  render() {
    return (
      <div className="inspector">
        <Player />
      </div>
    );
  }
}

export default Inspector;