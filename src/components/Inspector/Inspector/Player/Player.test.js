import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Player'

it('Player render', () => {
  const player = document.createElement('player');
  ReactDOM.render(<Player />, player);
  ReactDOM.unmountComponentAtNode(player);
});