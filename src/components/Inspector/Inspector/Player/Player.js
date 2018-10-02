import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="viewport"></div>
        <div className="playback-controls"></div>
      </div>
      

    );
  }
}

export default Player;
