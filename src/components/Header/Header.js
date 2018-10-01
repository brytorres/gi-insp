import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
  render() {
		return (
			<header>
        <h2>Gif Inspector</h2>
        <div className="nav">
          <a href="/about">About</a>
          <a href="/guide">Guide</a>
          <a href="/about">Contact</a>
        </div>
      </header>
		);
  }
}

export default Header


