import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './components/navigation.component';
import Home from './components/home.component';
import Contact from './components/contact.component';
import NotFound from './components/not-found.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);
