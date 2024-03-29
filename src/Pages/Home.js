import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Title } from '../styles/Title';
import { Button } from '../components/Button';

import humano from '../assets/images/humanos.png';

const StyledHeader = styled.header`
  background-image: url(${process.env.PUBLIC_URL+'/fundoHome.png'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
`

const StyledCol = styled(Col)`
    margin-top: 100px;
`

const StyledButton = styled(Button)`
  min-width: 185px;
  /* max-width: 200px; */
  padding: 10px;

  &:hover{
    background-image: linear-gradient(to bottom right, #3E5AA9, #00ACED);
  }
`

const Home = () => {
    return (
        <StyledHeader className="pt-5 pb-5">
            <Helmet>
                <title>aMap | Home</title>
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Container>
                <Row className="justify-content-around">
                    <StyledCol xs="12" md="5" className="text-left">
                        <Title tag="h1" color="#4A619F" weight="700" size="24px">Sua acessibilidade em um clique!</Title>
                        <Title tag="h2" color="#4A619F" weight="500" className="h4 mt-4" size="18px" >Deseja apenas visualizar os estabelecimentos acessíveis de sua região?</Title>
                        <a href="/mapa" style={{ textDecoration: 'none' }}><StyledButton block light size="lg" color="4A619F" name="subscribe" type="submit" className="mt-4 mb-4" >Busque agora!</StyledButton></a>
                    </StyledCol>
                    <Col md="6">
                        <div>
                            <img className="img-fluid" src={humano} alt="Desenho de uma pessoa andando e um cadeirante" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </StyledHeader>

    )
}

export default Home;