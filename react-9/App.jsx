// eslint-disable-next-line no-unused-vars
import React from 'react';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;