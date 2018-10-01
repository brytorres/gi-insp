import React from 'react'
import ReactDOM from 'react-dom'
import Uploader from './Uploader'

it('Uploader renders', () => {
  const uploader = document.createElement('uploader');
  ReactDOM.render(<Uploader />, uploader);
  ReactDOM.unmountComponentAtNode(uploader);
});
