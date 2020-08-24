import React from 'react';
import './App.css';
import StateProvider from './state/stateProvider';
import ErrorModal from './components/errorModal';
import MapContainer from './containers/mapContainer';

function App() {
    return (
        <div className='App'>
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
