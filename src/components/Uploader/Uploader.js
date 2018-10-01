import React, { Component } from 'react';
import './Uploader.css';

class Uploader extends Component {
  render(){
    return (
      <div className="uploader">
        <div className="dropzone">

          <p>Drop Your GIF Here</p>

          <p>or</p>

          <div className="upload-url">
            <input type="text" name="upload" id="upload" placeholder="Paste GIF URL Here" />
            <br />
            <button className="btn-upload">UPLOAD</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Uploader