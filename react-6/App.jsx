import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <h1>Ciao Mondo!</h1>
      <Welcome name="Stefan" age={22} />
    </div>
  );
}

export default App;