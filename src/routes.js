import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route status={404} path="*" component={HomeContainer} />
    </Route>
);
