import React from 'react'
import ReactDOM from 'react-dom'

import CampaignForm from './CampaignForm'

it('renders without issue', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(<CampaignForm/>, div)

    ReactDOM.unmountComponentAtNode(div)
})