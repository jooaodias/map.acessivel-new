import React, { useState } from 'react';
import {
    Button,
    FormGroup,
    Label,
    Input,
    Form,
    Alert,
    Spinner,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import styled from 'styled-components';
import firebase from 'firebase/app';

// import errorMessages from 'constants/errorMessages';
import { Box, StyledSpan } from './SignIn.styled';

const Title = styled.p`
  font-size: 20px;
  color: #4A619F;
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

function ForgotPassword({ hideForgotPassword, modal, toggle }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);


        await firebase.auth().sendPasswordResetEmail(event.target.email.value)
            .then(function () {
                setError('');
                setSuccess(true);
            }).catch(handleSignupFailure, setSuccess(false));

        setLoading(false);


    };
    const handleSignupFailure = (error) => {
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
        <Modal isOpen={modal} toggle={toggle}>
            <Box>
                <ModalHeader toggle={toggle}><Title>Ajuda para recuperar a senha</Title></ModalHeader>
                <ModalBody>
                    <Subtitle>
                        Digite seu e-mail para recuperar sua senha. Você receberá um e-mail com
                        instruções.
                    </Subtitle>
                    <Form onSubmit={handleSubmit}>
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
                        <button onClick={hideForgotPassword}>Já é cadastrado?</button>
                    </StyledSpan>
                </ModalBody>
            </Box>
            <ModalFooter>
                <Button color="#4A619F" onClick={toggle}>
                    Fechar
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ForgotPassword;
