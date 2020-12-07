import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';


import ButtonLink from './ButtonLink'

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<BrowserRouter>
            <ButtonLink id='test' linkTo='/' buttonText = 'test'/>
        </BrowserRouter>, div);

    ReactDOM.unmountComponentAtNode(div)
})