import React from 'react';
import Header from '../components/header';
import { Map, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { Location } from '../types/locationsResponse';

interface Props {
    currentPosition: LatLng;
    locations: Array<Location>;
}

const MapScreen = (props: Props) => {
    const { currentPosition, locations } = props;
    return (
        <>
            <Header />
            <Map
                style={{ height: '80vh' }}
                center={currentPosition}
                zoom={6}
                minZoom={3}
                maxZoom={10} >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {currentPosition && <Marker position={currentPosition}>
                    <Tooltip>Current location</Tooltip>
                    <Popup>Current location</Popup>
                </Marker>}
                {locations.length > 0 && locations.map((location, key) =>
                    <Marker key={key} position={location.position}>

                    </Marker>
                )}
            </Map>
        </>
    );
}

export default MapScreen;
