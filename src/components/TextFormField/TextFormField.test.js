import React from 'react'
import ReactDOM from 'react-dom'

import TextFormField from './TextFormField'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<TextFormField formId='form' label='test'/>, div)
    ReactDOM.unmountComponentAtNode(div)
})