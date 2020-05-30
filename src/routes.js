import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import Mapa from './components/Map/Map';

class Routes extends Component{
    render(){
        let routes = (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Mapa" component={Mapa}/>

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