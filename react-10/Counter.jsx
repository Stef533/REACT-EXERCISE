// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import CounterDisplay from './counterDisplay'; 

const Counter = ({ initialCount, decrementAmount }) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => {
    setCount(count - decrementAmount);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={decrement}>Decrement by {decrementAmount}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  decrementAmount: PropTypes.number.isRequired,
};

export default Counter;