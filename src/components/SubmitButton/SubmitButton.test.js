import React from 'react'
import ReactDOM from 'react-dom'

import SubmitButton from './SubmitButton'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SubmitButton buttonText='submit'/>, div)
    ReactDOM.unmountComponentAtNode(div)
})