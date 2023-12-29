import PropTypes from 'prop-types';

const AlertClock = ({ handleClick }) => {
  return <button onClick={handleClick}>Show Current Time</button>;
};

AlertClock.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AlertClock;