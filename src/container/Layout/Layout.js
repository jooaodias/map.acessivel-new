import React, {Component} from 'react';


class Layout extends Component{
    render(){
        return(
            <div className="Layout">
                <main className="Content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;