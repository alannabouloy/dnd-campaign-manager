import React from 'react'
import ReactDOM from 'react-dom'

import NoteForm from './NoteForm'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<NoteForm/>, div)

    ReactDOM.unmountComponentAtNode(div)
})