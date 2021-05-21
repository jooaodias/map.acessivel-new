import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Text } from './Question.styled'
import { questions } from '../../data/questions';
import Questionaire from './Questionaire';
import { ButtonStyled } from '../Places/Places.styled';
import Form from 'reactstrap/lib/Form';
import firebase from 'firebase/app';
import Spinner from 'reactstrap/lib/Spinner';

const random = Math.random().toString(36).substr(2, 9);

const questionsAnswered = {
    random : [
        { id: 0, value: 'af' },
        { id: 1, value: 'czz' },
        { id: 2, value: 'aweaw' },
        { id: 3, value: 'dasdas' },
        { id: 4, value: 'fdf' },
        { id: 5, value: 'sfa' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
        { id: 9, value: '' },
        { id: 10, value: '' },
        { id: 11, value: '' },
    ]
}

const Question = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(questionsAnswered)
        setLoading(true);

        await firebase
            .firestore()
            .collection("places")
            .doc('wIkNwJpunw4gmlaGavRa')
            .update(
                { questionTotal: firebase.firestore.FieldValue.arrayUnion(questionsAnswered) }
            )
            .then(function () {
                console.log("Document successfully written!");

            })
            .catch(function (error) {
                console.error("Erro na gravação pelo motivo: ", error);

            });

        setLoading(false);
    }

    return (
        <Container className="mt-3 pb-3" style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}>
            <Row>
                <Col className="mb-2 pt-4"> <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Questionário!</Text>
                    <Text>Responda as questões:</Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        {loading && (
                            <Spinner data-testid="signup-loader" color="primary" />
                        )}
                        {questions.map((question, index) =>
                            <Questionaire question={question} number={index} key={index} />
                        )}
                        <ButtonStyled className="px-5 py-2 mY-3">Salvar</ButtonStyled>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default Question
