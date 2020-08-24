import React from 'react';
import { LatLng, latLng } from 'leaflet';
import reducer from './reducer';
import { Location } from '../types/locationsResponse';

interface Props {
    children: JSX.Element;
}

interface Error {
	name: string;
    error: string;
}

export interface State {
    currentPosition: LatLng;
    locations: Array<Location>;
    error: Error;
}

interface IContext {
	state: State | undefined;
	dispatch: React.Dispatch<any>;
}

const localStoragePosition: string | null = localStorage.getItem('centerLocation');
export const initialState: State = {
    currentPosition: localStoragePosition ? JSON.parse(localStoragePosition) : latLng(45.55111, 18.69389),
    locations: [],
    error: { name: '', error: '' },
};

const StateProvider = (props: Props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
	return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
}

export const Context = React.createContext<IContext>({
	state: initialState,
	dispatch: undefined as any,
});

export default StateProvider;
