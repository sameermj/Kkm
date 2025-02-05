import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import KaraokeRoomPage from './KaraokeRoomPage';

const IndexPage = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/karaoke" component={KaraokeRoomPage} />
                <Route path="/" exact>
                    <h1>Welcome to the Karaoke App</h1>
                    <p>Please log in or sign up to continue.</p>
                </Route>
            </Switch>
        </Router>
    );
};

export default IndexPage;