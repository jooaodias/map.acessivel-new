import React from 'react';

import Home from './Home';
import Leis from './Leis';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos';

const LandingPage = () => {
    return (
        <div>
            <Home />
            <Sobre />
            <Leis />
            <QuemSomos />
            <Cadastro />
        </div>
    )
}

export default LandingPage;