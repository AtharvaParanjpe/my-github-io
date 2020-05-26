import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserCard from '../userCard/userCard';
import Home from '../home/home';
import About from '../about/about'
import './route.css'
import Project from '../projects/project';


function Routes() {
    return (
        <Switch>
            <Route exact path="/my-github-io" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
        </Switch>

    );
}


export default Routes