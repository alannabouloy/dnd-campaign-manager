import React from 'react'
import ReactDOM from 'react-dom'

import SectionTitle from './SectionTitle'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SectionTitle text='test'/>, div )
    ReactDOM.unmountComponentAtNode(div)
})