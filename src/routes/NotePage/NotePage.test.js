import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import NotePage from './NotePage'

it('renders without issue', () => {
    const div = document.createElement('div')

    const value = {
        campaigns: [
            {
                id: 1,
                campaignName: 'test',
                players: 6,
                playingSince: '11-1-12'
            }
        ],
        notes: [
            {
                id: 1,
                noteTitle: 'test',
                modified: '11-11-11',
                author: 1
            }
        ]
    }

    const match = {
        params: {
            noteId: 3
        }
    }

    ReactDOM.render(<UserContext.Provider value = {value}>
        <BrowserRouter>
            <NotePage match = {match}/>
        </BrowserRouter>
    </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})