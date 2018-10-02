import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Frames from './Frames';

it('Frames renders', () => {
  const frames = document.createElement('frames');
  ReactDOM.render(<Frames />, frames);
  ReactDOM.unmountComponentAtNode(frames);
});