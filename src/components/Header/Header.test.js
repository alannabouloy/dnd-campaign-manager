import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import Header from './Header'

it('renders without issue', () => {
    const value = {
        loggingOut: () => { return 'logged out'},
        logOut: ' '
    }

    const div = document.createElement('div')

    ReactDOM.render(<UserContext.Provider value={value}>
        <BrowserRouter>
            <Header heading='test'/>
        </BrowserRouter>
    </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})