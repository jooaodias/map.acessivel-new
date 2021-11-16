import React from 'react';
import CardLeis from '../components/CardLeis/CardLeis';
import { Container, Row, Col } from 'reactstrap';

const leis = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col sm="4" md="4" className="mb-4">
          <CardLeis
            title={'Lei Municipal nº 9.571'}
            subtitle={'17 de dezembro de 1997'}
            text={
              "Estabelecimentos são obrigados a ter à disposição de seus clientes e usuários portadores de deficiência visual, cardápios e relações de preços de seus serviços impressos em sistema de leitura 'Braile'."
            }
          />
        </Col>
        <Col sm="4" md="4" className="mb-4">
          <CardLeis
            title={'Lei Estadual nº 12.724'}
            subtitle={'09 de novembro de 2007'}
            text={
              'Dispõe sobre período mínimo de gratuidade em estacionamentos para veículos automotores utilizados por pessoas portadoras de necessidades especiais.'
            }
          />
        </Col>
        <Col sm="4" md="4" className="mb-4">
          <CardLeis
            title={'Lei Federal nº 10.098'}
            subtitle={'19 de dezembro de 2000'}
            text={
              'Estabelece normas gerais e critérios básicos para a promoção da acessibilidade das pessoas portadoras de deficiência, mediante a supressão de barreiras e de obstáculos nas vias e espaços públicos, no mobiliário urbano, na construção e reforma de edifícios e nos meios de transporte e de comunicação.'
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default leis;
