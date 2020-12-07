import React from 'react'
import ReactDOM from 'react-dom'
import AddButton from './AddButton'

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<AddButton id='test' onClick = {(e) => e} buttonText= 'test'/>, div);

    ReactDOM.unmountComponentAtNode(div);
})