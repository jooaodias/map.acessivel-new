import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components';
import { Title } from "../styles/Title";

import fotoM from '../assets/images/team/mateus.png';
import fotoA from '../assets/images/team/andre.png';
import fotoL from '../assets/images/team/leo.png';

const Text = styled.p`
  margin-top: 5px;
  color: #4A619F;
  font-size: 16px;
  text-align: center;
`

const Linha = styled(Container)`
    background-color: #4A619F;
    min-height: 140px;
    width: 100%;
`

const Parceiros = () => {
    return (
        <>
            <Container className="mt-5">
                <Text style={{fontSize: "1.2rem", fontWeight: "bold"}}>Nossos Parceiros!</Text>
                <Text>O projeto está sendo realizado com a ajuda e orientação por dois professores e um auxílio em design UX </Text>

            </Container>
            <Linha fluid >
                <Row noGutters className="justify-content-center text-center">
                    <Col md="3" className="mt-2">
                        <img src={fotoM} alt="Foto do Mateus" id="fotoMateus"/>
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white">
                            Mateus Santos
                        </Title>
                    </Col>

                    <Col md="3" className="mt-2">
                        <img src={fotoA} alt="Foto do André" />
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white">
                            André Bordignon
                        </Title>
                    </Col>

                    <Col md="3" className="mt-2">
                        <img src={fotoL} alt="Foto do Leonardo" />
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white" bold>
                            Leonardo Rocco
                        </Title>
                    </Col>
                </Row>
            </Linha>
        </>
    )
}

export default Parceiros;
