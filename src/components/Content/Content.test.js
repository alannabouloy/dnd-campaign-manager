import React from 'react';
import ReactDOM from 'react-dom';

import Content from './Content';

it('renders without issue', () => {
    const div = document.createElement('div');
    const content = 'this is content';

    ReactDOM.render(<Content content={content}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})