import React, { Component } from 'react';
import './Uploader.css';
import gifFrames from 'gif-frames';

class Uploader extends Component {
  constructor(props){
    super(props);
    this.state = { 
      gifUrl: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInspect = this.handleInspect.bind(this);
    this.getGifFrames = this.getGifFrames.bind(this);
  }

  handleChange(event) {
    this.setState({ gifUrl: event.target.value });
  }

  handleInspect(event) {
    // alert('A URL was submitted: ' + this.state.gifUrl);
    this.getGifFrames( this.state.gifUrl )
    event.preventDefault();
  }

  getGifFrames = (url) => {
    gifFrames({ url: url, frames: 'all', outputType: 'canvas' })
      .then(function (frameData) {
        
        // const frame1 = frameData[20].getImage()
        // console.table(frameData);
        // document.body.appendChild(frame1);
        // frameData.forEach(frame => {
        // });
      });
  }

  render(){
    return (
      <div className="uploader">
        <div className="dropzone">

          <p>Drop Your GIF Here</p>

          <p>or</p>

          <form onSubmit={this.handleInspect} className="upload-url">
            <p>https://media2.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif</p>
            <input type="text" name="upload" id="upload" placeholder="Paste GIF URL Here" value={this.state.value} onChange={this.handleChange}/>
            <input className="btn-upload" type="submit" value="INSPECT"/>
          </form>

          <div className="testImg"></div>

        </div>
      </div>
    );
  }
}

export default Uploader