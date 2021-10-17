import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import firebase from 'firebase/app';
import { ButtonStyled } from '../Places/Places.styled';
import ModalAnswer from '../ModalAnswer/ModalAnswer';
import calculatePontuation from '../../helpers/calculatePontuation';
import CalculationColor from '../../helpers/calculationColor';
import { faBlind, faDeaf, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const skater = new Icon({
    iconUrl: '/logo.png',
    iconSize: [30, 40]

})

const DivColor = styled.div`
    display: flex;
    justify-content: center;
`

function Mapa() {
    const [activeLocal, setActiveLocal] = useState(null);
    const [place, setPlace] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    useEffect(() => {
        firebase
            .firestore()
            .collection("places")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let place = doc.data();

                    // console.log(doc.data().name);
                    setPlace((places) => [...places, place]);
                    // console.log(place)

                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });


    }, [])

    if (activeLocal) {
        const questionTotal = place.map((local) => local.questionTotal)
        const positionFilter = questionTotal.findIndex((question) => question === activeLocal.questionTotal)

        const questions = questionTotal[positionFilter]

        const converse = questions?.map((obj) => {
            return Object.keys(obj).map(key => obj[key])
        })




        var calculation = calculatePontuation(converse)

        console.log(calculation)
    }



    return (
        <div>
            <Map center={[-22.897475, -47.0682962]} zoom={15} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <LocationMarker /> */}

                {place.filter(local => local.isValidated).map(local => (
                    <Marker
                        key={local.name}
                        position={[local.location[0], local.location[1]]}
                        onClick={() => {
                            setActiveLocal(local);
                        }}
                        icon={skater}

                    />
                ))}


                {activeLocal && (
                    <Popup
                        position={[
                            activeLocal.location[0],
                            activeLocal.location[1]
                        ]}
                        onClose={() => {
                            setActiveLocal(null);
                        }}
                    >
                        <div>
                            <h2>{activeLocal.name}</h2>
                            <p>{activeLocal.description}</p>
                            <DivColor>
                                <CalculationColor calculation={calculation.contBlind} icon={faBlind} title="deficiente visual"/>
                                <CalculationColor calculation={calculation.contWheilchair} icon={faWheelchair} title="deficiente físico"/>
                                <CalculationColor calculation={calculation.contDeaf} icon={faDeaf} title="deficiente auditivo"/>
                                
                            </DivColor>
                            <ButtonStyled style={{ color: 'white' }} className="mt-2" onClick={toggle}>Responder o Questionário!</ButtonStyled>
                        </div>

                    </Popup>
                )}
                {modal && (
                    <ModalAnswer modal={modal} setModal={setModal} toggle={toggle} activeLocal={activeLocal} calculation={calculation}/>
                )}
            </Map>
        </div>
    )
}

export default Mapa;