import React, { Component } from 'react';
import Player from './Player/Player';
import Frames from './Frames/Frames';
import './Inspector.css'

class Inspector extends Component {

  render() {
    
    return(
      <div className="inspector">
        <Player
          frames={this.props.frames} />
        <Frames
          frames={this.props.frames} />
      </div>
      
    );
  }
}

export default Inspector