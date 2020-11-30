import React, { Component } from 'react'
// import Home from './sections/Home';
import Food from '../Food'
import Signup from './sections/Signup';
import Signin from './sections/Signin';
import { Switch, Route } from 'react-router-dom'
import Weather from './Weather';

export default class Section extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Food} />
                <Route path="/weather" component={Weather} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        )
    }
}
