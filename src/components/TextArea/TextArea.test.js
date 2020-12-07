import React from 'react'
import ReactDOM from 'react-dom'

import TextArea from './TextArea'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<TextArea formId='form' label='test'/>, div)
    ReactDOM.unmountComponentAtNode(div)
})