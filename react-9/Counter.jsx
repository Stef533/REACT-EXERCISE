// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ initialValue, incrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  incrementAmount: PropTypes.number.isRequired
};

export default Counter;

// Quando si chiama la funzione "setter" restituita da useState in React, il parametro deve essere una funzione. Questo perché lo stato in React potrebbe essere asincrono e basato su batch, il che significa che le modifiche dello stato potrebbero non riflettersi immediatamente.