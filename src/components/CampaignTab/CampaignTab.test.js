import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import CampaignTab from './CampaignTab'

it('renders without issue', () => {
    const div = document.createElement('div');
    const campaign = {
        campaginName: 'test',
        id: 1,
        players: 3, 
        playingSince: '11-20-29'
    }

    ReactDOM.render(<BrowserRouter>
        <CampaignTab campaign = {campaign}/>
    </BrowserRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
})