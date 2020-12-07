import React from 'react'
import ReactDOM from 'react-dom'

import ContentBlock from './ContentBlock'

it('renders without issue', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ContentBlock content='test' modified='testdate'/>, div);

    ReactDOM.unmountComponentAtNode(div);
})