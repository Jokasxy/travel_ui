import React from 'react';
import './App.css';
import StateProvider from './state/stateProvider';
import ErrorModal from './components/errorModal';
import MapContainer from './containers/mapContainer';
import { makeStyles } from '@material-ui/core';

function App() {
    const classes = useClasses();

    return (
        <div className={classes.app}>
            <StateProvider>
                <>
                    <ErrorModal />
                    <MapContainer />
                </>
            </StateProvider>
        </div>
    );
}

export default App;

const useClasses = makeStyles({
    app: {
        textAlign: 'center',
        backgroundColor: '#282c34',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
})
