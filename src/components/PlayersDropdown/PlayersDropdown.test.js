import React from 'react'
import ReactDOM from 'react-dom'

import PlayersDropdown from './PlayersDropdown'

it('renders without issue', () => {
    const div = document.createElement('div')

    ReactDOM.render(<PlayersDropdown onChange={e => e}/>, div)
    ReactDOM.unmountComponentAtNode(div)
})