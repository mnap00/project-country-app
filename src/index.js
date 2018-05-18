import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

render (
    <Provider store={store}>
        <h1>Initiate Project</h1>
    </Provider>,
    document.getElementById('root')
);
