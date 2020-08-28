import React from 'react';
import { Container } from 'reactstrap';

import Leis from './Leis';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos'


const Home = () => {
    return (
        <Container>
            <p>Olá, bem vindo a Página Inicial</p>
            <div>
                <Sobre id="Sobre-o-Projeto" />
            </div>
            <div>
                <Cadastro id="Cadastro" />
            </div>
            <div>
                <QuemSomos id="Quem-Somos" />
            </div>

            <div id="Leis-de-Acessibilidade">
                <Leis />

            </div>
        </Container>
    )
}

export default Home;