import { useState } from 'react'
// import { Marker } from 'react-map-gl'; // Note: this dependency should NOT be installed separately
// import { Marker } from 'react-map-gl/dist/es5';

import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@aws-amplify/ui-react'
import { MapView } from '@aws-amplify/ui-react-geo';

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'

import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';

import './App.css'

Amplify.configure(outputs);

function App() {
  const [count, setCount] = useState(0)

    const [{ latitude, longitude }, setMarkerLocation] = useState({
        latitude: 40,
        longitude: -100,
    });

    const updateMarker = () =>
        setMarkerLocation({ latitude: latitude + 5, longitude: longitude + 5 });

  return (
      <Authenticator>
          {({ signOut }) => (

              <>
                  <div>
                      <a href="https://vitejs.dev" target="_blank">
                          <img src={appLogo} className="logo" alt="amplify-vite-map-marker logo"/>
                      </a>
                      <a href="https://react.dev" target="_blank">
                          <img src={reactLogo} className="logo react" alt="React logo"/>
                      </a>
                  </div>
                  <h1>amplify-vite-map-marker</h1>
                  <div className="card">
                      <button onClick={() => setCount((count) => count + 1)}>
                          count is {count}
                      </button>
                      <p>
                          Edit <code>src/App.tsx</code> and save to test HMR
                      </p>
                  </div>
                  <p className="read-the-docs">
                      Click on the Vite and React logos to learn more
                  </p>
                  <Button onClick={updateMarker}>Move Marker</Button>
                  <MapView
                      initialViewState={{
                      latitude: 37.8,
                      longitude: -122.4,
                      zoom: 14,
                  }}
                      >
                      {/*<Marker latitude={latitude} longitude={longitude} />*/}
                  </MapView>
                  <Button onClick={signOut}>Sign out</Button>
                  <PWABadge/>
              </>

          )}
      </Authenticator>
  )
}

export default App
