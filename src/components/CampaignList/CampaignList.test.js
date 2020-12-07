import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import CampaignList from './CampaignList'

it('renders without issue', () => {
    const div = document.createElement('div');

    const value = {
        campaigns: [{
            campaignName: 'test1',
            id: 1,
            players: 3,
            playingSince: '11-20-20'
        }]
    }

    ReactDOM.render(<UserContext.Provider value = {value}>
            <BrowserRouter>
                 <CampaignList/>
            </BrowserRouter>
        </UserContext.Provider>, div);

    ReactDOM.unmountComponentAtNode(div);
})