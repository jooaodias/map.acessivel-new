import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Authentication from './components/Authentication/AuthenticationRoute';
import ForgotPassword from './components/Authentication/ForgotPassword';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import FormPlace from './components/Places/FormPlace';
import ListPlaces from './components/Places/ListPlaces';

import LandingPage from './Pages/LandingPage';
import Local from './Pages/Local';
import Maping from './Pages/Maping';
import Perfil from './Pages/Perfil/Perfil';
// import firebase from 'firebase/app';

const RenderAuthenticated = (Component, props) => (
  <Authentication>
    {({ isUserAuthenticated }) =>
      isUserAuthenticated && <Component {...props} />
    }
  </Authentication>
);

function Routes(props) {
  const displayName = props.user?.displayName;
  const routes = (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route exact path="/mapa" component={Mapa}/> */}
      <Route exact path="/esqueci-senha" component={ForgotPassword} />
      <Route exact path="/login">
        {displayName ? <Redirect to="/" /> : <SignIn />}
      </Route>
      <Route exact path="/cadastro">
        {displayName ? <Redirect to="/" /> : <SignUp />}
      </Route>
      <Route
        path="/mapa"
        render={props => RenderAuthenticated(Maping, props)}
      />
      <Route
        path="/perfil"
        render={props => RenderAuthenticated(Perfil, props)}
      />
      <Route
        path="/cadastro-local"
        render={props => RenderAuthenticated(FormPlace, props)}
      />
      <Route
        path="/lista-locais"
        render={props => RenderAuthenticated(ListPlaces, props)}
      />

      <Route
        path="/local:id"
        render={props => RenderAuthenticated(Local, props)}
      />
      <Redirect to="/" />
    </Switch>
  );

  return <React.Fragment>{routes}</React.Fragment>;
}

export default Routes;
