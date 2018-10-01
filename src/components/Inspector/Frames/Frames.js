import React, { Component } from 'react'
import './Frames.css'

class Frames extends Component {
  render() {
    return (
      <div className="frames">
        <div className="frame">prev - -</div>
        <div className="frame">prev</div>
        <div className="frame">current</div>
        <div className="frame">next</div>
        <div className="frame">next + +</div>
      </div>
    );
  }
}

export default Frames;