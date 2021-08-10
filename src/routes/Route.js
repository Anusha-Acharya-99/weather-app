import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../containers/homepage/Homepage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/" component = {Homepage}/>
        </Switch>
    )
}

export default Routes;
