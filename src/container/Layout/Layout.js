import React, {Component} from 'react';

import Menu from '../Menu/Menu';

class Layout extends Component{
    render(){
        return(
            <div className="Layout">
                <Menu />
                <main className="Content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;