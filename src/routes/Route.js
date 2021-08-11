import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favourite from '../containers/favourite/Favourite';
import Homepage from '../containers/homepage/Homepage';
import RecentSearch from '../containers/recentSearch/RecentSearch';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/favourite" component={Favourite} />
            <Route exact path="/recent-search" component={RecentSearch} />
        </Switch>
    )
}

export default Routes;
