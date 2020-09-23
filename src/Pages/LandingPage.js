import React from 'react';

import Home from './Home';
import Leis from './Leis';
import Projeto from './oProjeto';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos';
import Parceiros from './Parceiros';

const LandingPage = () => {
    return (
        <div>
            <div id="/"> <Home /> </div>
            <div id="o-Projeto"> <Projeto /> </div>
            <div id="Leis-De-Acessibilidade"> <Leis /> </div>
            <div id="Quem-Somos"> <QuemSomos /> </div>
            <div id="Parceiros"><Parceiros/> </div>
            <div id="Cadastro"> <Cadastro/> </div>
        </div>
    )
}

export default LandingPage;