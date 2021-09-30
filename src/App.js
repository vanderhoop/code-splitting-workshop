import React from 'react';
import './App.css';

import asyncComponent from './asyncComponent';

function App() {
  const [workshopHasAdvancedToComponentry, setWorkshopHasAdvancedToComponentry] = React.useState(false);

  return (
    <div className="App">
      <h1>Code-Splitting</h1>
      <p>A lightweight playground.</p>

      <button
        onClick={() => { import(/* webpackChunkName: 'Fart' */ './fart.js') }}
      >
        Open the console and click me to fetch and execute some js that the browser doesn't even *have* yet.
      </button>

      <br />
      <button
        disabled
        onClick={() => {
          setWorkshopHasAdvancedToComponentry(true);
        }}
      >
        For Future Development
      </button>
    </div>
  );
}

export default App;
