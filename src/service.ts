import React from 'react';
import axios from 'axios';
import LocationsResponse from './types/locationsResponse';
import Client from './serviceMiddlewares/client';
import ErrorMiddleware from './serviceMiddlewares/errorMiddleware';

export interface Service {
    fetchLocations(): Promise<LocationsResponse>;
}

export let service: Service = {} as any;

export const setService = (dispatch: React.Dispatch<any>) => {
	const client = new Client(axios);
	const error = new ErrorMiddleware(client, dispatch);
	service = error;
}
