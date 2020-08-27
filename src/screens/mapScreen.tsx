import React from 'react';
import Header from '../components/header';
import { Map, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { Location } from '../types/locationsResponse';
import PopupBody from '../components/popupBody';
import { makeStyles } from '@material-ui/core';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

interface Props {
    currentPosition: LatLng;
    locations: Array<Location>;
}

const MarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
  
L.Marker.prototype.options.icon = MarkerIcon;

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const MapScreen = (props: Props) => {
    const { currentPosition, locations } = props;
    const classes = useClasses();

    return (
        <>
            <Header />
            <main>
                <Map
                    className={classes.map}
                    center={currentPosition}
                    zoom={6}
                    minZoom={3}
                    maxZoom={10}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {<Marker position={currentPosition} icon={redIcon}>
                        <Tooltip className={classes.tooltipName}>
                            Current location
                        </Tooltip>
                        <Popup className={classes.tooltipName}>
                            Current location
                        </Popup>
                    </Marker>}
                    {locations.map((location, key) =>
                        <Marker key={key} position={location.position}>
                            <Tooltip>
                                <p>
                                    <span className={classes.tooltipName}>
                                        {location.name}
                                    </span>
                                    , {location.country}
                                </p>
                            </Tooltip>
                            <Popup>
                                <PopupBody location={location} />
                            </Popup>
                        </Marker>
                    )}
                </Map>
            </main>
        </>
    );
}

export default MapScreen;

const useClasses = makeStyles({
    map: {
        height: 'calc(100vh - 120px)',
    },
    tooltipName: {
        fontWeight: 'bold',
    },
})
