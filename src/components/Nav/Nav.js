import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component{
  render() {
		return (
			<div className="nav">
        <h2><a href="/">Gif Inspector</a></h2>
        <div className="nav-menu">
          <a href="/about">About</a>
          <a href="/guide">Guide</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
		);
  }
}

export default Nav


