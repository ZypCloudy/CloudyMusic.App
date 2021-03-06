import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, Switch} from "react-router";
import {Provider} from "react-redux";
import App from "./App";
import Login from './user/Login';
import "./index.css";
import createBrowserHistory from "history/createBrowserHistory";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
