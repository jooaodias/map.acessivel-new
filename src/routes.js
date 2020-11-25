import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';

import LandingPage from './pages/LandingPage';
import Mapa from './pages/Mapa';

class Routes extends Component{
    render(){
        let routes = (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/mapa" component={Mapa}/>
                <Route exact path="/login" component={SignIn}/>
                <Route exact path="/cadastro" component={SignUp}/>

                <Redirect to="/"/>
            </Switch>
        );
        
        return(
            <React.Fragment>
                {routes}
            </React.Fragment>
          );
    }
}

export default Routes;