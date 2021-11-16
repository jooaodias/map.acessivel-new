import React, { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Row,
  Alert,
  FormGroup,
  CustomInput,
  Spinner,
} from 'reactstrap';
import { Text } from './Question.styled';
import { questions } from '../../data/questions';
// import Questionaire, { questionsAnswered } from './Questionaire';
import { ButtonStyled } from '../Places/Places.styled';
import Form from 'reactstrap/lib/Form';
import firebase from 'firebase/app';

const Question = props => {
  const { local, setModal } = props;
  const [loading, setLoading] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const currentUser = firebase.auth().currentUser;
        setUser(currentUser);
      }
    });
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(questionsAnswered);
    setLoading(true);

    await firebase
      .firestore()
      .collection('places')
      .where('idLocal', '==', local.idLocal)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref
            .update({
              questionTotal:
                firebase.firestore.FieldValue.arrayUnion(questionsAnswered),
            })
            .then(function () {
              console.log('Document successfully written!');
              const countUser = firebase.firestore().collection('rating');

              countUser
                .doc(user.uid)
                .update({
                  count: firebase.firestore.FieldValue.increment(1),
                })
                .catch(function (error) {
                  countUser
                    .doc(user.uid)
                    .set({
                      count: 0,
                    })
                    .then(function () {
                      countUser.doc(user.uid).update({
                        count: firebase.firestore.FieldValue.increment(1),
                      });
                    });
                });
              setMessageSuccess('Questionário respondido com sucesso');
              setTimeout(() => {
                setModal(false);
              }, 2000);
            })
            .catch(function (error) {
              console.error('Erro na gravação pelo motivo: ', error);
              setMessageError('Houve algum problema, atualize a página');
            });
        });
      });

    setLoading(false);
  };

  const random = Math.random().toString(36).substr(2, 12);
  const questionsAnswered = {
    [random]: [
      { id: 0, value: '' },
      { id: 1, value: '' },
      { id: 2, value: '' },
      { id: 3, value: '' },
      { id: 4, value: '' },
      { id: 5, value: '' },
      { id: 6, value: '' },
      { id: 7, value: '' },
      { id: 8, value: '' },
      { id: 9, value: '' },
      { id: 10, value: '' },
      { id: 11, value: '' },
    ],
  };

  const updatingQuestion = (e, num) => {
    console.log(questionsAnswered[random][num].value);
    questionsAnswered[random][num].value = e.target.value;
  };

  const verifyDeficiency = index => {
    let deficiency = 0;
    if (index === 0) deficiency = 'Deficiência Visual';
    if (index === 4) deficiency = 'Deficiência Motora';
    if (index === 8) deficiency = 'Deficiência Auditiva';
    if (deficiency === 0) return;
    return (
      <>
        <hr
          style={{
            height: '2px',
            borderWidth: '0',
            color: '#4a619f',
            backgroundColor: 'gray',
          }}
        ></hr>
        <p style={{ fontWeight: '500' }}>{deficiency}</p>
      </>
    );
  };

  return (
    <Container
      className="mt-3 pb-3"
      style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}
    >
      <Row>
        <Col className="pt-4">
          {' '}
          <Text style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
            Questionário!
          </Text>
          <Text>Responda as questões:</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            {loading && <Spinner data-testid="signup-loader" color="primary" />}
            {questions.map((question, index) => (
              <React.Fragment key={index}>
                {verifyDeficiency(index)}
                {/* <Questionaire question={question} number={index} key={index} /> */}
                <Text>{`${index + 1}. ${question}`}</Text>
                <span>
                  <FormGroup
                    onChange={e => updatingQuestion(e, index)}
                    key={index}
                  >
                    <CustomInput
                      type="radio"
                      name={`question${question}`}
                      id={`${index}Sim`}
                      label="Sim"
                      value="S"
                    ></CustomInput>
                    <CustomInput
                      type="radio"
                      name={`question${question}`}
                      id={`${index}Não`}
                      label="Não"
                      value="N"
                    ></CustomInput>
                    <CustomInput
                      type="radio"
                      name={`question${question}`}
                      id={`${index}NS`}
                      label="Não sei"
                      value="NS"
                    ></CustomInput>
                  </FormGroup>
                </span>
              </React.Fragment>
            ))}
            <ButtonStyled className="px-5 py-2 mY-3">Salvar</ButtonStyled>
            {messageSuccess && (
              <Alert className="mt-3" color="success">
                {messageSuccess}
              </Alert>
            )}
            {messageError && (
              <Alert className="mt-3" color="danger">
                {messageError}
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
