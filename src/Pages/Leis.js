import React from 'react';
import Card_Leis from '../components/Card_Leis/Card_Leis';
import { Row, Col } from 'reactstrap';

const leis = () =>{
    return(
            <Row>
                <Col sm="4">
                    <Card_Leis 
                        title = {"Lei Municipal nº 9.571"}
                        subtitle = {"17 de dezembro de 1997"}
                        text = {"Estabelecimentos são obrigados a ter à disposição de seus clientes e usuários portadores de deficiência visual, cardápios e relações de preços de seus serviços impressos em sistema de leitura 'Braile'."}
                    />
                </Col>
                <Col sm="4">
                    <Card_Leis 
                        title = {"Lei Estadual nº 12.724"}
                        subtitle = {"09 de novembro de 2007"}
                        text = {"Dispõe sobre período mínimo de gratuidade em estacionamentos para veículos automotores utilizados por pessoas portadoras de necessidades especiais."}
                    />
                </Col>
                <Col sm="4">
                    <Card_Leis 
                        title = {"Lei Estadual nº 12.724"}
                        subtitle = {"09 de novembro de 2007"}
                        text = {"Dispõe sobre período mínimo de gratuidade em estacionamentos para veículos automotores utilizados por pessoas portadoras de necessidades especiais."}
                    />
                </Col>
        </Row>
    )
}

export default leis;