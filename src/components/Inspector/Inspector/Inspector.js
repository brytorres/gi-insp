import React, { Component } from 'react';
import Player from './Player/Player';
import Frames from './Frames/Frames';
import './Inspector.css'

class Inspector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const frames = this.props.frames
    console.log(frames)
    
    return(
      <div className="inspector">
        {/* <Player
          frames={frames} />
        <Frames 
          frames={frames} /> */}
        <Player />
        <Frames  />
      </div>
      
    );
  }
}

export default Inspector