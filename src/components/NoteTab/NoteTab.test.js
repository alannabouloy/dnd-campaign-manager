import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import NoteTab from './NoteTab'

it('renders without issue', () => {
    const div = document.createElement('div')
    const note = {
        noteTitle: 'test',
        id: 1,
        modified: '11-20-10',
        author: 1,
    }

    ReactDOM.render(<BrowserRouter>
        <NoteTab note={note} id={note.id}/>
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})