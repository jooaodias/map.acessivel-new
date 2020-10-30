import React from 'react';
import { Container } from 'reactstrap';
import foto_ex from '../assets/images/aMap - Horizontal.png';

const Mapa = () =>{
    return(
        <Container>
            Aqui terá um mapa
            <img src={foto_ex} alt={"Foto do aMap"} width="100%"/>
        </Container>
    )
}

export default Mapa;