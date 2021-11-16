import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Alert,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
  Spinner,
} from 'reactstrap';
import { ButtonStyled, InputStyled, Text } from './Places.styled';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import firebase from 'firebase/app';
import { Title } from '../../styles/Title';

const FormPlace = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  //   const [coordinates, setCoordiantes] = useState([]);

  async function getLatLang(local) {
    var response = [];
    const provider = new OpenStreetMapProvider();

    const result = await provider.search({ query: local });
    const lat = result[0].y;
    const lang = result[0].x;
    return [lat, lang];
  }

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const name = document.getElementById('name').value;
    const adress = document.getElementById('adress').value;
    const neigh = document.getElementById('neigh').value;
    const ADnumber = document.getElementById('ADnumber').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const description = document.getElementById('description').value;
    const isValidated = false;
    const idLocal = Math.random().toString(36).substr(2, 12);
    const questionTotal = [];

    if (
      name.trim() === '' &&
      adress.trim() === '' &&
      neigh.trim() === '' &&
      ADnumber.trim() === '' &&
      phone.trim() === '' &&
      city.trim() === '' &&
      description.trim() === ''
    ) {
      setErrorMessage('Responda todo(s) o(s) campo(s)!');
      setLoading(false);
      return;
    }
    const [lat, lang] = await getLatLang(
      `${adress} ${ADnumber} ${city} Brasil`
    );

    await firebase
      .firestore()
      .collection('places')
      .add({
        name,
        adress,
        neigh,
        city,
        ADnumber,
        description,
        phone,
        isValidated,
        idLocal,
        questionTotal,
        location: [lat, lang],
      })
      .then(function () {
        setSuccessMessage(
          `Cadastro Realizado com Sucesso! Em alguns instantes o ${name} estará disponível para todos`
        );
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        setErrorMessage(error);
        console.error('Erro na gravação pelo motivo: ', error);
      });
    setLoading(false);
  };

  return (
    <Container>
      <Helmet>
        <title>aMap | Cadastro-Estabelecimento</title>
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Row className="justify-content-center">
        <Col
          md="5"
          style={{ backgroundColor: '#c8c8c8', borderRadius: '10px' }}
        >
          <Row>
            <Col className="mb-2 pt-4">
              {' '}
              <Text style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                Cadastre o Estabelecimento
              </Text>
              <Text>
                Nos ajude a crescer e incentivar aos lugares por melhoraias na
                acessibilidade. Insira as informações do local comercial para
                colocarmos automaticamente{' '}
                <span role="img" aria-label="Emoji">
                  🤩
                </span>{' '}
                no{' '}
                <i>
                  <b>aMap</b>
                </i>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                {loading && (
                  <Spinner data-testid="signup-loader" color="primary" />
                )}
                <FormGroup className="mb-4 mt-2">
                  <Label for="name">
                    <Title color="#4A619F" size="1.0rem">
                      Nome do Estabelecimento:
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="name"
                    placeholder="Digite o Nome do Estabelecimento"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="adress">
                    <Title color="#4A619F" size="1.0rem">
                      Rua:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="adress"
                    placeholder="Digite o nome da Rua"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="neigh">
                    <Title color="#4A619F" size="1.0rem">
                      Bairro:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="neigh"
                    placeholder="Digite o Bairro"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="ADnumber">
                    <Title color="#4A619F" size="1.0rem">
                      Número:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="ADnumber"
                    placeholder="Digite o Número"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="city">
                    <Title color="#4A619F" size="1.0rem">
                      Cidade:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="city"
                    placeholder="Digite o nome da Cidade"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="description">
                    <Title color="#4A619F" size="1.0rem">
                      Descrição:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="description"
                    placeholder="Digite a descrição do local:"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Label for="phone">
                    <Title color="#4A619F" size="1.0rem">
                      Telefone:{' '}
                    </Title>
                  </Label>
                  <InputStyled
                    type="text"
                    id="phone"
                    placeholder="Digite o Telefone"
                  />
                </FormGroup>

                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
                {successMessage && (
                  <Alert color="success">{successMessage}</Alert>
                )}
                <ButtonStyled className="px-5 py-2 mt-2 mb-4">
                  ENVIAR
                </ButtonStyled>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FormPlace;
