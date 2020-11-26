import React, { useState } from 'react'
import { Alert, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { Text, InputStyled, ButtonStyled } from './SignIn.styled'
import { Title } from '../../styles/Title';

import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    console.log(firebase.auth().currentUser);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        setLoading(true);

        console.log(name, password, email);
        if (password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(async ({ user }) => {
                    await user.updateProfile({
                        displayName: name,
                    });
                    await firebase
                        .firestore()
                        .collection('users')
                        .doc(user.uid)
                        .set({ email, name });
                })
                .catch(handleSignupFailure)
                .then(history.push('/'));

        }

        setLoading(false);

    }
    const handleSignupFailure = (error) => {
        console.log(error)
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
        <Container>
            <Row className="justify-content-center">
                <Col md="5" style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}>
                    <Row >
                        <Col className="mb-2 pt-4">    <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Ajude nossa comunidade a crescer!</Text>
                            <Text>Nos ajude a descobrir mais estabelecimentos para ajudarmos mais pessoas através dos dados que você cadastrar!</Text>
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
                                    <Label for="name"><Title color="#4A619F" size="1.0rem">Nome</Title></Label>
                                    <InputStyled type="text" id="name" placeholder="Digite seu nome" />
                                </FormGroup>

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
                                <ButtonStyled className="px-5 py-2 mt-3">Ajude</ButtonStyled>
                            </Form>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp
