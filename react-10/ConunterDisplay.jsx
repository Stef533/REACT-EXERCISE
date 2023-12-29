// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; 

const CounterDisplay = ({ count }) => {
  return <h2>Count: {count}</h2>;
};

CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired, 
};

export default CounterDisplay;