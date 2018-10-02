import React from 'react';
import ReactDOM from 'react-dom'
import Inspector from './Inspector'

it('Inspector renders', () => {
  const inspector = document.createElement('inspector');
  ReactDOM.render(<Inspector />, inspector);
  ReactDOM.unmountComponentAtNode(inspector);
});