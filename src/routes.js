import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Mapa from './pages/Mapa';

class Routes extends Component{
    render(){
        let routes = (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/mapa" component={Mapa}/>

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