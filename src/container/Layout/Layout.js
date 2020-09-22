import React, { Component } from 'react';

import { Header } from '../Menu/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer/>
            </div >
        )
    }
}

export default Layout;