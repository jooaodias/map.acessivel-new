import React, { useState } from 'react'
import { Form, FormGroup, Input, Spinner } from 'reactstrap'
import { Text, ButtonStyled } from './Question.styled'
import firebase from 'firebase/app';


const Questionaire = ({ question, number, user }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        await firebase
            .firestore()
            .collection('rating')
            .doc()
            .add({
            })
            .then(function () {
                console.log("Document successfully written!");

            })
            .catch(function (error) {
                console.error("Erro na gravação pelo motivo: ", error);

            });

        setLoading(false);

    }

    return (
        <div>
            {loading && (
                <Spinner data-testid="signup-loader" color="primary" />
            )}
            <Text>{number}. {question}</Text>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="radio" name={`question${number}`} id="S">Sim</Input>
                </FormGroup>
                <FormGroup>
                    <Input type="radio" name={`question${number}`} id="N">Não</Input>
                </FormGroup>
                <FormGroup>
                    <Input type="radio" name={`question${number}`} id="NS">Não sei</Input>
                </FormGroup>
                <ButtonStyled className="px-5 py-2 mt-3">Salvar</ButtonStyled>
            </Form>
        </div>
    )
}

export default Questionaire
