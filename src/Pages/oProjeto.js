import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Title } from '../styles/Title';

import foto from '../assets/images/bloco_cel.png';
import blocoWhite from '../assets/images/bloco_white.png';

const StyledContainer = styled(Container)`
  background-color: #4a619f;
  color: white;
  padding-bottom: 40px;
  margin-bottom: 40px;
`;

const StyledCol = styled(Col)`
  margin-top: 150px;
`;

const Projeto = () => {
  return (
    <StyledContainer fluid>
      <Container id="oProjeto">
        <Row className="justify-content-around">
          <StyledCol xs="12" md="5" className="text-justify">
            <Title
              tag="h2"
              color="white"
              weight="500"
              className="h4 mb-4"
              size="24px"
            >
              O Projeto / Motivação
            </Title>
            <p>
              Motivada pela inclusão social de pessoas com deficiência e
              confrontada pelos direitos e deveres desse público, criou-se uma
              ferramenta digital que abre portas para a acessibilidade em
              estabelecimentos de diversas categorias: aMap - Acessibilidade em
              Mapa.
            </p>
            <p>
              Como o próprio nome diz, basta ser um ponto no mapa e a
              acessibilidade estará em suas mãos!
            </p>
            <p className="mb-5">
              Aqui, nós lutamos por seus direitos, informamos leis para a sua
              conscientização e compartilhamos de experiências que nos tornam
              humanos!
            </p>
            <p>
              <b>
                <i>
                  Lutar pelos direitos dos deficientes é uma forma de superar as
                  nossas próprias deficiências.
                </i>
              </b>
            </p>
            <cite>John F. Kennedy</cite>
          </StyledCol>
          <Col md="6" className="mt-5">
            <div style={{ position: 'relative', zIndex: 3 }}>
              <img src={blocoWhite} className="img-fluid" alt="bloco branco" />
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  zIndex: 1,
                  left: '26px',
                }}
              >
                <img
                  src={foto}
                  className="img-fluid"
                  alt="imagem de um mapa visto de um celular"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default Projeto;
