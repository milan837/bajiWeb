import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from '../login/Login';
import Home from '../home/Home';
import Matches from '../matches/Matches';
import OnboardingBaji from '../onboardingBaji/OnboardingBaji';
import OpenBaji from '../openBaji/OpenBaji';

class Mainfest extends Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/matches" exact component={Matches}/>
                <Route path="/onboardingbaji" exact component={OnboardingBaji}/>
                <Route path="/openbaij" exact component={OpenBaji}/>
            </Router>
        );
    }
}

export default Mainfest;