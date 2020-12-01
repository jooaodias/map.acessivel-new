import React, { useState } from 'react'
import { Alert, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { Title } from '../../styles/Title';
import { Text, InputStyled, ButtonStyled, StyledSpan } from './SignIn.styled'

import firebase from 'firebase/app';
import SocialSignIn from './SocialSignIn';
import { NavLink, useHistory } from 'react-router-dom';

const SignIn = ({ updateErrorMessage }) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(handleSignupFailure)
            .then(history.push('/'));


        setLoading(false);
    }

    const handleSignupFailure = (error) => {
        switch (error.code) {
            case 'auth/invalid-email': {
                return setErrorMessage('E-mail inválido.');
            }

            case 'auth/user-disabled': {
                return setErrorMessage('Usuário desabilitado.');
            }

            case 'auth/user-not-found': {
                return setErrorMessage('Senha ou usuário inválido.');
            }

            case 'auth/wrong-password': {
                return setErrorMessage('Senha ou usuário inválido.');
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
                            <Text>Caso você ainda não tenha o cadastro no aMap basta <NavLink to="/cadastro"><b>clicar aqui!</b></NavLink> para cadastrar ou você pode entrar com conta do <i><b>Google</b></i> e navegar por ai :)</Text>
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
                            <StyledSpan>
                                <NavLink to="/esqueci-senha">Esqueceu sua senha?</NavLink>
                            </StyledSpan>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn
