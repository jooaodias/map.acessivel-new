import React from 'react';
import { ButtonStyled } from '../components/Places/Places.styled';
import Mapa from '../components/Map/Map';

function Maping() {

    return (
        <>
            <Mapa />
            <ButtonStyled className="mt-4" href="/cadastro-local">Cadastre um Estabelecimento!</ButtonStyled>
            <ButtonStyled className="mt-2" href="/lista-locais">Estabelecimentos Cadastrados</ButtonStyled>
        </>

    )
}

export default Maping;