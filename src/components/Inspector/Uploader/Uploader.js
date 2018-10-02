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
      frames: {},
      removeUploader: false,
      removeLoader: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleInspect = this.handleInspect.bind(this);
    this.removeUploader = this.removeUploader.bind(this);
    this.removeLoader = this.removeLoader.bind(this);
    this.getGifFrames = this.getGifFrames.bind(this);
    this.test = this.test.bind(this);
  }
  
  handleChange(event) {
    this.setState({ gifUrl: event.target.value });
  }
  
  handleInspect(event) {
    this.getGifFrames(this.state.gifUrl);
    event.preventDefault();
  }
  
  removeUploader() {
    this.setState({ removeUploader: true });
    this.setState({ loading: true });
  }

  removeLoader() {
    this.setState({ removeLoader: true });
  }

  test() {
    alert('Test')
  }
  
  getGifFrames = (url) => {
    this.removeUploader();
    gifFrames({ url: url, frames: 'all', outputType: 'png' })
      .then(function (frameData) {
        console.table(frameData);
        // this.setState({ frames: frameData })
        // this.removeLoader();
        
      });
      // this.test();
    // setTimeout(() => {

    // <Player />
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
        <div className="dropzone">
          <Loader
            type="Triangle"
            color="#00BFFF"
            height="200"
            width="200"
          />
          <h3>Electrons are analyzing the GIF. Please Wait...</h3>
        </div>

    } else {

      inspector = 
        <div className="dropzone">
          <p>Drop Your GIF Here</p>

          <p>or</p>

          <form onSubmit={this.handleInspect} className="upload-url">
            <p>https://media2.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif</p>
            <input type="text" name="upload" id="upload" placeholder="Paste GIF URL Here" value={this.state.value} onChange={this.handleChange} />
            <input className="btn-upload" type="submit" value="INSPECT" />
          </form>
        </div>

    }

    // Remove uploader and spinner when GIF processing is complete
    if(removeLoader) {
      inspector = 
        <Inspector
          frames = {frames} />
    }

    // Render inspector when upload is complete
    // if(showInspector) {
    //   inspector = 
    //     <Inspector 
    //       frames = 
    // }

    return (
      <div className="uploader">
          {inspector}
      </div>
    );
  }
}

export default Uploader;