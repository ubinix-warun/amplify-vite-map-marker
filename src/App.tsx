import { useState } from 'react'

import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css'

import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import './App.css'

Amplify.configure(outputs);

function App() {
  const [count, setCount] = useState(0)

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
                  <button onClick={signOut}>Sign out</button>
                  <PWABadge/>
              </>

          )}
      </Authenticator>
  )
}

export default App
