import React, { Component } from 'react';
import Player from './Player/Player';
import Frames from './Frames/Frames';
import './Inspector.css'

class Inspector extends Component {

  render() {
    return(
      <div className="inspector">
        <Player
          frames = {this.props.frames}
          width  = {this.props.width}
          height = {this.props.height} />
        <Frames
          frames = {this.props.frames} />
      </div>
    );
  }
}

export default Inspector