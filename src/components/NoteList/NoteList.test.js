import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import NoteList from './NoteList'

it('renders without issue', () => {
    const value = {
        notes: [{
        noteTitle: 'test',
        id: 1,
        modified: '11-20-10',
        author: 1,
    }]
}

    const div = document.createElement('div');

    ReactDOM.render(<UserContext.Provider value={value}>
        <BrowserRouter>
            <NoteList />
        </BrowserRouter>
    </UserContext.Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})