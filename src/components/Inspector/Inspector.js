import React, { Component } from 'react';
import './Inspector.css'
import Player from './Player/Player'
import Frames from './Frames/Frames'

class Inspector extends Component {
  render() {
    return (
      <div className="inspector">
        <Player />
        <Frames />
      </div>
    );
  }
}

export default Inspector;