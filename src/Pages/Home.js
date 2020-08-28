import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Title } from '../styles/Title';
import Leis from './Leis';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos'

const StyledHeader = styled.header`
  background-color: #FFF9F1;
  background-image: url(${require('../assets/images/pattern-alto.png')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Home = () => {
    return (
        <div>
            <StyledHeader className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col xs="12" className="text-left mt-5 mb-4 ">
                            <Title tag="h1" color="#662D91" weight="800" size="2.5rem">Acessibilidade para todos!</Title>
                            <Title tag="h3" color="#FBB040" className="h4">Deseja ver os estabelecimentos acessíveis de sua região?</Title>
                        </Col>
                    </Row>
                </Container>

            </StyledHeader>

            <div id="Sobre-o-Projeto">
                <Sobre />
            </div>

            <div id="Leis-De-Acessibilidade">
                <Leis />
            </div>

            <div id="Quem-Somos">
                <QuemSomos />
            </div>

            <div id="Cadastro">
                <Cadastro />
            </div>

        </div>
    )
}

export default Home;