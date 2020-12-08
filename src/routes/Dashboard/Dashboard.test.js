import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import Dashboard from './Dashboard'

it('renders without issue', () => {
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

    const div = document.createElement('div')

    ReactDOM.render(<UserContext.Provider value= {value}>
        <BrowserRouter>
            <Dashboard/>
        </BrowserRouter>
    </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})