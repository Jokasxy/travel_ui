import { State, initialState } from "./stateProvider";

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const SET_LOCATIONS = 'SET_LOCATIONS';
export const ERROR = 'ERROR';

const reducer = (state: State = initialState, action: any) => {
    switch(action.type) {
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentPosition: action.payload.currentPosition
            };
        case SET_LOCATIONS:
            return {
                ...state,
                locations: action.payload.locations
            }
        case ERROR:
            return {
                ...state,
                error: {
                    name: action.payload?.name ? action.payload.name : '',
                    error: action.payload?.error ? action.payload.error : '',
                },
            };
    }
}

export default reducer;
