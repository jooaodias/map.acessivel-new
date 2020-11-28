import React, { useState, useEffect } from 'react'
import { PerfilImage, ContainerProfile, PerfilName, PerfilTitle } from './Perfil.styled.js'

import firebase from 'firebase/app';
import styled, { keyframes } from 'styled-components';

function Perfil() {
    const [user, setUser] = useState(null);

    const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const currentUser = firebase.auth().currentUser;
                setUser(currentUser);
            }
        });
    }, []);
    console.log(user)

    const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    `;

    return (
        <ContainerProfile className="py-4 d-flex flex-column">
            <PerfilTitle>PERFIL</PerfilTitle>
            <PerfilImage
                src={user?.photoURL}
                width="143px"
                height="143px"
                placeholderText="Foto"
                className="border mx-auto"
                alt={`Foto de ${user?.displayName}`}
            />
            <PerfilName>
                Nome: {user?.displayName}
            </PerfilName>
            <PerfilName>
                E-mail: {user?.email}
            </PerfilName>
            <div className="d-flex justify-content-center">
            <Rotate><img src="logo.png" alt="Logo aMap"></img></Rotate>
            </div>
        </ContainerProfile>
    )
}

export default Perfil
