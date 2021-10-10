import React from 'react';
import { ButtonStyled } from '../components/Places/Places.styled';
import Mapa from '../components/Map/Map';
import { Helmet } from "react-helmet";
import { Container } from 'reactstrap';

function Maping() {

    return (
        <>
            <Helmet>
                <title>aMap | Mapa</title>
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Mapa />
            <Container>
                <ButtonStyled className="mt-4" href="/cadastro-local">Cadastre um Estabelecimento!</ButtonStyled>
                <ButtonStyled className="mt-2" href="/lista-locais">Estabelecimentos Cadastrados</ButtonStyled>
            </Container>
        </>

    )
}

export default Maping;