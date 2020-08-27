import React from 'react';
import { latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import MapScreen from '../screens/mapScreen';
import { Context } from '../state/stateProvider';
import { SET_CURRENT_LOCATION, SET_LOCATIONS, ERROR } from '../state/reducer';
import { setService, service } from '../service';
import localizationEN from '../localization/localizationEN';
import LocationsResponse from '../types/locationsResponse';



const MapContainer = () => {
    const { state, dispatch } = React.useContext(Context);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                const currentPosition = latLng(position.coords.latitude, position.coords.longitude);
                dispatch({ type: SET_CURRENT_LOCATION,
                    payload: {currentPosition: currentPosition}
                });
                localStorage.setItem('centerLocation', JSON.stringify(currentPosition));
            } 
        );

        setService(dispatch);
        service.fetchLocations().then((response: LocationsResponse) => {
            dispatch({ type: SET_LOCATIONS, payload: { locations: response.getLocations() } });
        })
        .catch(() => {
            dispatch({ type: ERROR, payload: {
                name: localizationEN.locationsErrorName,
                error: localizationEN.locationsErrorError
                }
            });
        })
    }, []);

    return (
        <MapScreen currentPosition={state!.currentPosition} locations={state!.locations} />
    )
}

export default MapContainer;
