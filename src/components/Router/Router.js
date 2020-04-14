import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../../App';
import QuakeElement  from '../QuakeElement/QuakeElement';
export default class Router extends Component {
    render() {
        return (
            <div>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/quake/:id" component={QuakeElement}></Route>
                </Switch>
            </BrowserRouter>
                
            </div>
        )
    }
}
