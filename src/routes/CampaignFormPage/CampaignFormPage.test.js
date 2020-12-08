import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import CampaignFormPage from './CampaignFormPage'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter>
        <CampaignFormPage/>
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})