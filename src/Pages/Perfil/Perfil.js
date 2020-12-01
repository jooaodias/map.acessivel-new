import React, { useState, useEffect } from 'react'
import { PerfilImage, ContainerProfile, PerfilName, PerfilTitle, Rotate } from './Perfil.styled.js'

import firebase from 'firebase/app';
import { FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFileDownload, faUser } from '@fortawesome/free-solid-svg-icons';

function Perfil() {
    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState(null)

    const clickPhoto = (event) => {
        const file = event.target.files
        setPhoto(file);
    }

    const handlePhoto = (event) => {
        console.log('passei aq');
        user.updateProfile({
            displayName: 'Joaozinho',
            photoURL: photo
        }).then(function () {
            // Update successful.
            console.log('SUCESSO');
            document.location.reload(true)
        }).catch(function (error) {
            // An error happened.
            console.log(error)
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const currentUser = firebase.auth().currentUser;
                setUser(currentUser);
            }
        });
    }, []);
    console.log(user)


    return (
        <ContainerProfile className="py-4 d-flex flex-column">
            <PerfilTitle>PERFIL</PerfilTitle>
            <FormGroup className="text-center">
                <Label for="exampleFile" title="Escolher Foto de Perfil" onClick={clickPhoto}>
                    <FontAwesomeIcon icon={faFileDownload} size="lg" />
                </Label>
                <Input type="file" name="file" id="exampleFile" style={{ display: 'none' }} accept=".jpg, .jpeg, .png" />
                <FontAwesomeIcon title="Salvar" className="ml-2" icon={faCheck} size="lg" onClick={handlePhoto}/>
            </FormGroup>
            {user?.photoURL && (
                <PerfilImage
                    src={user?.photoURL}
                    width="143px"
                    height="143px"
                    placeholderText="Foto"
                    className="border mx-auto"
                    alt={`Foto de ${user?.displayName}`}
                />

            )}
            {!user?.photoURL && (
                <FontAwesomeIcon className="mx-auto" icon={faUser} size="8x" />

            )}
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
