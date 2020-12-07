import React from 'react'
import ReactDOM from 'react-dom'

import ModifiedTag from './ModifiedTag'

it('renders without issue', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModifiedTag modified='test'/>, div )

    ReactDOM.unmountComponentAtNode(div)
})