import React  from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'

it('Nav renders', () => {
    const nav = document.createElement('nav')
    ReactDOM.render(<Nav />, nav)
    ReactDOM.unmountComponentAtNode(nav);
});