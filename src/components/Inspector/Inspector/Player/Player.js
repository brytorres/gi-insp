import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props)

    this.processFrameData = this.processFrameData.bind(this);
  }

  processFrameData(frame) {
    var arrayBufferView = new Uint8Array(frame['_obj']);
    var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    return imageUrl
  }
  
  render() {
    const frames = this.props.frames
    const img = this.processFrameData(frames[1])
    console.log(typeof this.props.width);
    const viewportDimensions = {
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div className="player">
        <div className="viewport" style={viewportDimensions}>
            <img src={img} alt=""/>
        </div>
        {/* <div className="playback-controls"></div> */}
      </div>
    );
  }
}

export default Player;
