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
      width: 0,
      height: 0,
      removeUploader: false,
      removeLoader: false,
      error: ''
    };
    
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    this.handleInspect = this.handleInspect.bind(this);
    this.removeUploader = this.removeUploader.bind(this);
  }
  
  // Handle URL submission
  handleUrlSubmit(event) {
    this.setState({ gifUrl: event.target.value });
  }
  
  // Remove Uploader and set to loading state
  removeUploader() {
    this.setState({ removeUploader: true });
    this.setState({ loading: true });
  }

  // Handle initial GIF inspection
  handleInspect(event) {
    const url = this.state.gifUrl
    
    this.removeUploader();

    // Get GIF Dimensions
    gifFrames({ url: url, frames: 'all', outputType: 'canvas' })
      .then((sizeData) => {
        const canvas = sizeData[0].getImage();

        this.setState({
          width: parseInt(canvas.attributes[0].value),
          height: parseInt(canvas.attributes[1].value)
        })
      })

    // Get GIF Frames as JPG
    gifFrames({ url: url, frames: 'all', outputType: 'jpg' })
      .then((frameData) => {
        
        let tempFrames = [];

        frameData.forEach(frame => {
          tempFrames.push(frame.getImage())
        });

        // TODO - find cleaner way to display loading for reasonable amount of time
        setTimeout(() => {
          this.setState({ frames: tempFrames })
          this.setState({ removeLoader: true });
        }, 2000);

    }).catch((error) => {
        console.log(error);
        this.setState({ error: error.toString(),
                        removeUploader: false,
                        loading: false
                      });
        setTimeout(() => {
          this.setState({ error: '' });
        }, 5000);
      });

    event.preventDefault();
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
              <input type="text" name="upload" id="upload" placeholder="Paste GIF URL Here" value={this.state.value} onChange={this.handleUrlSubmit} />
              <input className="btn-upload" type="submit" value="INSPECT" />
            </form>
          </div>
        </div>
    }

    // Get image dimensions
    const width = this.state.width;
    const height = this.state.height;

    // Remove uploader + spinner when GIF processing is complete, then render Inspector
    if(removeLoader) {
      inspector = 
        <Inspector
          frames = {frames}
          width = {width}
          height = {height} />
    }

    // Handle gifFrames Error Alert
    const error = this.state.error
    let errorAlert;

    if(error) {
      errorAlert = 
        <div className="error">
          {error}. Please try again.
        </div>
    } else {
      errorAlert = ''
    }

    return (
      <div>
          {errorAlert}
          {inspector}
      </div>
    );
  }
}

export default Uploader;