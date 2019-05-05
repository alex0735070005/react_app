import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Photo from './pages/Photo';

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/photo' component={Photo}/>
        </Switch>
    )
}
