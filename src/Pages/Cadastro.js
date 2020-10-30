import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import styled from 'styled-components';
import { Title } from '../styles/Title';

const Text = styled.p`
  margin-top: 5px;
  color: #4A619F;
  font-size: 16px;
`

const InputStyled = styled(Input)`
    top: 5px;
    border-radius: 10px;
    padding: 24px;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.8);

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #E5E5E5;
    }
   
`;

const ButtonStyled = styled(Button)`
    background-color: #4A619F;
    color: white;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid #4A619F; 

    :hover{
        background-color: #4593EE;
        border: 2px solid white; 
    }
`

const Cadastro = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md="5" className="mb-2">
                    <Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Ajude nossa comunidade a crescer!</Text>
                    <Text>Nos ajude a descobrir mais estabelecimentos paraajudarmos mais pessoas através dos dados que você cadastrar!</Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="name"><Title color="#4A619F" size="1.0rem">Nome</Title></Label>
                            <InputStyled type="text" id="name" placeholder="Digite seu nome" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email"><Title color="#4A619F" size="1.0rem">E-mail</Title></Label>
                            <InputStyled type="email" id="email" placeholder="Digite seu e-mail" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password"><Title color="#4A619F" size="1.0rem">Senha</Title></Label>
                            <InputStyled type="password" id="password" placeholder="Digite sua senha" />
                        </FormGroup>

                        <FormGroup check className="mt-4">
                            <Label check>
                                <Input type="checkbox" style={{transform: 'scale(1.3) translateY(-1px) translateX(2px)'}}/>{'   '}
                                <b className="ml-1">Aceito os termos de uso.</b>
                            </Label>
                        </FormGroup>
                        <ButtonStyled className="px-5 py-2 mt-3">Ajude</ButtonStyled>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Cadastro
