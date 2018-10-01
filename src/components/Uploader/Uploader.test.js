import React from 'react'
import ReactDOM from 'react-dom'
import Uploader from './Uploader'

it('Uploader renders', () => {
  const uploader = document.createElement('uploader');
  ReactDOM.render(<Uploader />, uploader);
  ReactDOM.unmountComponentAtNode(uploader);
});

// it.only('Grab GIF from URL', () => {
//   const url = 'https://media2.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif';

// });
