import React from 'react'
import ReactDOM from 'react-dom'

import PrivacyButtons from './PrivacyButtons'

it('renders without issue', () => {
    const div  = document.createElement('div')

    ReactDOM.render(<PrivacyButtons onChange={e => e}/>, div)
    ReactDOM.unmountComponentAtNode(div)
})