import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import NoteFormPage from './NoteFormPage'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter>
        <NoteFormPage />
    </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})