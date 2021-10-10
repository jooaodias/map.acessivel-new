import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Container } from 'reactstrap'
import firebase from 'firebase/app';


const Local = () => {
    const { location } = useHistory()
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
                    // console.log(place.name)

                    // console.log(doc.data().name);
                    setPlace((places) => [...places, place]);

                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        setLoading(false);
    }, []);

    if (!loading) {
        var activePlaceFilter = place.filter((local => local.idLocal === location.hash.slice(1))).pop()
        // if(!activePlaceFilter) return     
    }
    
    const linkToMapsPlace = `https://www.google.com.br/maps/place/Rua ${activePlaceFilter?.adress},${activePlaceFilter?.ADnumber}-${activePlaceFilter?.city}`



    return (
        <Container className="mt-5">
            <p>Bem vindo ao Restaurante <b>{activePlaceFilter?.name}</b> na cidade de {activePlaceFilter?.city}</p>
            <p>Caso queira conhecer o local expecional <a href={linkToMapsPlace} target="_blank" rel="noopener noreferrer">clicando neste link!</a></p>
        </Container>
    )
}

export default Local
