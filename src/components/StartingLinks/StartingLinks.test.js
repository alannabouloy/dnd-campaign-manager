import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import StartingLinks from './StartingLinks'

it('renders without issue', ()=> {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter>
        <StartingLinks/>
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})