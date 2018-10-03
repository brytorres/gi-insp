import React, { Component } from 'react'
import './Frames.css'

class Frames extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    // }
    this.processEachFrame = this.processEachFrame.bind(this);
  }

  processEachFrame(frame) {
    var arrayBufferView = new Uint8Array(frame['_obj']);
    var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    return imageUrl
  }

  render() {
    const frames = this.props.frames
    let fiveFrames = [];

    for (let i = 0; i < 5; i++) {
      fiveFrames.push(this.processEachFrame(frames[i]))
    }
    

    return (
      <div className="frames">
        <div className="frame">
          <img src={fiveFrames[0]} alt="" />
        </div>
        <div className="frame">
          <img src={fiveFrames[1]} alt="" />
        </div>
        <div className="frame">
          <img src={fiveFrames[2]} alt="" />
        </div>
        <div className="frame">
          <img src={fiveFrames[3]} alt="" />
        </div>
        <div className="frame">
          <img src={fiveFrames[4]} alt="" />
        </div>
      </div>
    );
  }
}

export default Frames;