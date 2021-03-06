import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './components/navigation.component';
import Home from './components/home.component';
import Contact from './components/contact.component';
import NotFound from './components/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer
    from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-container.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentsContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);
