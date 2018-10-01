import React  from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

it('Header renders', () => {
    const header = document.createElement('header')
    ReactDOM.render(<Header />, header)
    ReactDOM.unmountComponentAtNode(header);
});