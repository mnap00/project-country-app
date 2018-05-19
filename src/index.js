import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './devtools';
import * as actions from './actions/actions-countries';
import Navigation from './components/navigation.component';

render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Navigation}>
            </Route>
            <DevTools />
        </Router>
    </Provider>,
    document.getElementById('root')
);
store.dispatch(actions.getCountries());
