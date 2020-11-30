import React, { useState } from 'react';
import {
    Button,
    FormGroup,
    Label,
    Input,
    Form,
    Alert,
    Spinner,
    Container,
    Row,
    Col,
} from 'reactstrap';
import styled from 'styled-components';
import firebase from 'firebase/app';

// import errorMessages from 'constants/errorMessages';
import { Box, StyledSpan } from './SignIn.styled';
import { NavLink } from 'react-router-dom';

const Title = styled.p`
  font-size: 20px;
  color: #4A619F;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

function ForgotPassword() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);


        await firebase.auth().sendPasswordResetEmail(event.target.email.value.trim())
            .then(function () {
                setError('');
                setSuccess(true);
            }).catch(handleSignupFailure, setSuccess(false));

        setLoading(false);


    };
    const handleSignupFailure = (error) => {
        console.log(error)
        switch (error.code) {
            case 'auth/invalid-email': {
                return setError('E-mail inválido.');
            }

            case 'auth/user-disabled': {
                return setError('Usuário desabilitado.');
            }

            case 'auth/user-not-found': {
                return setError('Senha ou usuário inválido.');
            }

            case 'auth/wrong-password': {
                return setError('Senha ou usuário inválido.');
            }

            default: {
                return setError('Ocorreu um erro inesperado.');
            }
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="5" style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}>

                    <Box >
                        <Title>Ajuda para recuperar a senha</Title>
                        <Subtitle>
                            Digite seu e-mail para recuperar sua senha. Você receberá um e-mail com
                            instruções.
                        </Subtitle>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            {error && <Alert color="danger">{error}</Alert>}
                            {success && (
                                <Alert color="success">
                                    Uma solicitação foi enviada ao seu e-mail para alterar sua senha.
                                </Alert>
                            )}
                            <FormGroup>
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    name="email"
                                    id="email"
                                    data-testid="email-input"
                                    placeholder="Digite seu e-mail"
                                    disabled={loading}
                                />
                            </FormGroup>

                            <Button color="primary" block type="submit" disabled={loading}>
                                {loading ? <Spinner color="light" size="sm" /> : 'Enviar'}
                            </Button>
                        </Form>

                        <StyledSpan>
                            <NavLink to="/login">Já é cadastrado?</NavLink>
                        </StyledSpan>

                    </Box>
                </Col>
            </Row>
        </Container>

    );
}

export default ForgotPassword;
