import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Uploader from '../Uploader/Uploader'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Uploader />
      </div>
    );
  }
}

export default App;
