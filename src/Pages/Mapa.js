import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as LocalData from '../components/Map/estabelecimentos.json';
import { Icon } from 'leaflet';

const skater = new Icon({
    iconUrl: '/logo.png',
    iconSize: [30, 40]

})

function Mapa() {
    const [activeLocal, setActiveLocal] = useState(null);
    console.log(LocalData.features);
    return (
        <Map center={[-22.897475,-47.0682962]} zoom={14}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {LocalData.features.map(local => (
                <Marker
                    key={local.properties.LOCAL_ID}
                    position={[local.geometry.coordinates[1], local.geometry.coordinates[0]]}
                    onClick={() => {
                        setActiveLocal(local);
                    }}
                    icon={skater}

                />
            ))}
            
            {activeLocal && (
                <Popup
                    position={[
                        activeLocal.geometry.coordinates[1],
                        activeLocal.geometry.coordinates[0]
                    ]}
                    onClose={() => {
                        setActiveLocal(null);
                    }}
                >
                    <div>
                        <h2>{activeLocal.properties.NAME}</h2>
                        <p>{activeLocal.properties.DESCRIPTIO}</p>
                    </div>

                </Popup>
            )}
        </Map>

    )
}

export default Mapa;