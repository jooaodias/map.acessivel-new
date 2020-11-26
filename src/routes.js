import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Authentication from './components/Authentication/AuthenticationRoute';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';

import LandingPage from './pages/LandingPage';
import Mapa from './pages/Mapa';
// import firebase from 'firebase/app';

const RenderAuthenticated = (Component, props) => (
    <Authentication>
        {({ isUserAuthenticated }) => isUserAuthenticated && <Component {...props} />}
    </Authentication>
);

class Routes extends Component {
    render(user) {

        let routes = (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                {/* <Route exact path="/mapa" component={Mapa}/> */}
                <Route exact path="/login">
                    {user ? <Redirect to="/" /> : <SignIn />}
                </Route>
                <Route exact path="/cadastro">
                    {user ? <Redirect to="/" /> : <SignUp />}
                </Route>
                <Route
                    path="/mapa"
                    render={props => RenderAuthenticated(Mapa, props)}
                />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <React.Fragment>
                {routes}
            </React.Fragment>
        );
    }
}

export default Routes;