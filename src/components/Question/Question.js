import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Text } from './Question.styled'
import { questions } from '../../data/questions';
import Questionaire from './Questionaire';


const Question = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="5" style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}>
                    <Row>
                        <Col className="mb-2 pt-4"> <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Questionário!</Text>
                            <Text>Responda as questões:</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {questions.map((question, index) =>
                                <Questionaire question={question} number={index} />
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Question
