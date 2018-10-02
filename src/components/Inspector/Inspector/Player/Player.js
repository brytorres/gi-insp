import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const frames = this.props.frames

    return (
      <div className="player">
        <div className="viewport">
          {/* {frames} */}
        </div>
        <div className="playback-controls"></div>
      </div>
    );
  }
}

export default Player;
