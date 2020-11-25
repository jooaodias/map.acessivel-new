import React, { useState } from 'react'
import { Alert, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { Title } from '../../styles/Title';
import { Text, InputStyled, ButtonStyled } from './SignIn.styled'

import firebase from 'firebase/app';
import LandingPage from '../../pages/LandingPage';
import SocialSignIn from './SocialSignIn';
import { NavLink } from 'react-router-dom';

const SignIn = (updateErrorMessage) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const fields = event.target.elements;

        await firebase
            .auth()
            .signInWithEmailAndPassword(
                fields.email.value.trim(),
                fields.password.value,
            )
            .catch(handleSignupFailure);

    }

    const handleSignupFailure = (error) => {
        switch (error.code) {
            case 'auth/email-already-in-use': {
                return setErrorMessage('Este e-mail já está em uso.');
            }

            case 'auth/invalid-email': {
                return setErrorMessage('O formato do e-mail informado é inválido.');
            }

            case 'auth/weak-password': {
                return setErrorMessage('Sua senha deve ter no mínimo 6 caracteres.');
            }

            default: {
                return setErrorMessage('Ocorreu um erro inesperado.');
            }
        }
    }

    return (
        <Container >
            <Row className="justify-content-center">
                <Col md="5" style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}>
                    <Row >
                        <Col className="mb-2 pt-4">    <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Faça o Login!</Text>
                            <Text>Caso você ainda não tenha o cadastro no aMap basta <NavLink to="/cadastro">clicar aqui!</NavLink> para cadastrar e navegar por ai :)</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-5">
                            <Form onSubmit={handleSubmit} >
                                {loading && (
                                    <Spinner data-testid="signup-loader" color="primary" />
                                )}
                                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
                                <FormGroup>
                                    <Label for="email"><Title color="#4A619F" size="1.0rem">E-mail</Title></Label>
                                    <InputStyled type="text" id="email" placeholder="Digite seu e-mail" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password"><Title color="#4A619F" size="1.0rem">Senha</Title></Label>
                                    <InputStyled type="password" id="password" placeholder="Digite sua senha" />
                                </FormGroup>

                                <FormGroup check className="mt-4">
                                    <Label check>
                                        <Input type="checkbox" style={{ transform: 'scale(1.3) translateY(-1px) translateX(2px)' }} />{'   '}
                                        <b className="ml-1">Aceito os termos de uso.</b>
                                    </Label>
                                </FormGroup>
                                <ButtonStyled className="px-5 py-2 mt-3">Entre!</ButtonStyled>
                            </Form>
                            <SocialSignIn updateErrorMessage={updateErrorMessage} />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn
