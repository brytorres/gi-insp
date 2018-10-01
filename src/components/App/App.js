import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Uploader from '../Uploader/Uploader'
import Inspector from '../Inspector/Inspector'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {/* <Uploader /> */}
        <Inspector />
      </div>
    );
  }
}

export default App;
