import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { Text } from './Places.styled';
import PageLoading from '../Loading/PageLoading';

import firebase from 'firebase/app';

const ListPlaces = () => {
    const [place, setPlace] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        firebase
            .firestore()
            .collection("places")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let place = doc.data();
                    console.log(place.name)

                    // console.log(doc.data().name);
                    setPlace((places) => [...places, place]);

                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        setLoading(false);
    }, []);

    return (
        <Container>
            {loading && (
                <PageLoading />
            )}
            <Text style={{ fontSize: '1.3rem', fontWeight: '600' }}>Lista dos Estabelecimentos Cadastrados no <i><b>aMap</b></i>. Total: {place.length}</Text>
            <hr />
            {place.map((local, index) => (
                <div key={local.name} className="mb-3">
                    <Text>{index + 1} - <b>Estabelecimento:</b> {local.name} <br/><b>Endereço</b>: {local.adress+' - '+local.neigh+' '+local.ADnumber+', '+local.city}</Text>
                </div>
            ))}
        </Container>
    )
}

export default ListPlaces
