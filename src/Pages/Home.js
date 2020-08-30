import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Title } from '../styles/Title';
import { Button } from '../components/Button';
import Leis from './Leis';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import QuemSomos from './QuemSomos';

import humano from '../assets/images/humanos.png';

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
                        <Col xs="12" md="6" className="text-left mt-5 mb-4 ">
                            <Title tag="h1" color="#4A619F" weight="800" size="2.5rem">Acessibilidade para todos!</Title>
                            <Title tag="h3" color="#4A619F" className="h4">Deseja ver os estabelecimentos acessíveis de sua região?</Title>

                            <Button block light bold size="lg" color="4A619F" name="subscribe" type="submit">Busque agora!</Button>
                        </Col>
                        <Col >
                            <div>
                                <img className="img-fluid" src={humano} alt="Desenho de uma pessoa andando e um cadeirante" />
                            </div>
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