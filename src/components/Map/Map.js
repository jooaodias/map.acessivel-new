import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import firebase from 'firebase/app';
import { ButtonStyled } from '../Places/Places.styled';
import ModalAnswer from '../ModalAnswer/ModalAnswer';

const skater = new Icon({
    iconUrl: '/logo.png',
    iconSize: [30, 40]

})

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
                    console.log(place.name)
                    // console.log(doc.data().name);
                    setPlace((places) => [...places, place]);
                    console.log(place)
                    
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
            

    }, [])

    return (
        <div>
            <Map center={[-22.897475, -47.0682962]} zoom={15} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <LocationMarker /> */}

                {place.map(local => (
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
                            <ButtonStyled style={{ color: 'white' }} className="mt-2" onClick={toggle}>Responder o Questionário!</ButtonStyled>
                        </div>

                    </Popup>
                )}
                {modal && (
                    <ModalAnswer modal={modal} setModal={setModal} toggle={toggle} activeLocal={activeLocal}/>
                )}
            </Map>
        </div>
    )
}

export default Mapa;