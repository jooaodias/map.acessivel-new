import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components';
import { Title } from "../styles/Title";

import fotoA from '../assets/images/team/ana.png';
import fotoJ from '../assets/images/team/joao.png';
import fotoL from '../assets/images/team/luiz.png';

const Text = styled.p`
  margin-top: 5px;
  color: #4A619F;
  font-size: 16px;
  text-align: center;
`

const Linha = styled(Container)`
    background-color: #4593EE;
    min-height: 140px;
    width: 100%;

`

const QuemSomos = () => {
    return (
        <>
            <Container className="mt-5">
                <Text style={{fontSize: "1.2rem", fontWeight: "bold"}}>Quem Somos?</Text>
                <Text>O projeto está sendo montado por 3 alunos da Instituição: Instituto Federal de São Paulo - Campus Campinas</Text>

            </Container>
            <Linha fluid >
                <Row noGutters className="justify-content-center text-center">
                    <Col md="3" className="mt-2">
                        <img src={fotoA} alt="Foto da Ana" />
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white">
                            Ana Clara
                        </Title>
                    </Col>

                    <Col md="3" className="mt-2">
                        <img src={fotoJ} alt="Foto do João" />
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white">
                            João Vitor
                        </Title>
                    </Col>

                    <Col md="3" className="mt-2">
                        <img src={fotoL} alt="Foto do Luiz" />
                        <Title className="mt-2" size="1.2rem" tag="h3" color="white" bold>
                            Luiz Roberto
                        </Title>
                    </Col>
                </Row>
            </Linha>
        </>
    )
}

export default QuemSomos
