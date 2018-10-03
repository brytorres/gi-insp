import React, { Component } from 'react';
import gifFrames from 'gif-frames';
import Loader from 'react-loader-spinner';
import Inspector from '../Inspector/Inspector'
import './Uploader.css';

class Uploader extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gifUrl: '',
      frames: [],
      removeUploader: false,
      removeLoader: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleInspect = this.handleInspect.bind(this);
    this.removeUploader = this.removeUploader.bind(this);
  }
  
  handleChange(event) {
    this.setState({ gifUrl: event.target.value });
  }
  
  handleInspect(event) {
    const url = this.state.gifUrl
    
    this.removeUploader();

    gifFrames({ url: url, frames: 'all', outputType: 'jpg' })
      .then((frameData) => {
        // console.log(frameData);
        let tempFrames = [];
        frameData.forEach(frame => {
          tempFrames.push(frame.getImage())
        });
        // console.log(tempFrames);
        setTimeout(() => {
          this.setState({ frames: tempFrames })
          this.setState({ removeLoader: true });
          
        }, 2000);

      }).catch(console.error.bind(console));

    event.preventDefault();
  }
  
  removeUploader() {
    this.setState({ removeUploader: true });
    this.setState({ loading: true });
  }

  render() {

    // Set loader variables
    const removeUploader = this.state.removeUploader;
    const removeLoader = this.state.removeLoader;
    const frames = this.state.frames;
    let inspector;

    // Check whether to show uploader to loading spinner  
    if(removeUploader) {

      inspector = 
        <div className="uploader">
          <div className="dropzone">
            <Loader
              type="Triangle"
              color="#3c6e71"
              height="200"
              width="200"
            />
            <h3>Electrons are analyzing the GIF. Please Wait...</h3>
          </div>
        </div>

    } else {

      inspector = 
        <div className="uploader">
          <div className="dropzone">
            <p>Drop Your GIF Here</p>

            <p>or</p>

            <form onSubmit={this.handleInspect} className="upload-url">
              {/* <p>https://media2.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif</p> */}
              <input type="text" name="upload" id="upload" placeholder="Paste GIF URL Here" value={this.state.value} onChange={this.handleChange} />
              <input className="btn-upload" type="submit" value="INSPECT" />
            </form>
          </div>
        </div>
    }

    // Remove uploader + spinner when GIF processing is complete, then render Inspector
    if(removeLoader) {
      inspector = 
        <Inspector
          frames = {frames} />
    }

    return (
      <div>
          {inspector}
      </div>
    );
  }
}

export default Uploader;