import React, {Component} from 'react';

import { Header } from '../Menu/Header';

class Layout extends Component{
    render(){
        return(
            <div className="Layout">
                <Header />
                <main className="Content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;