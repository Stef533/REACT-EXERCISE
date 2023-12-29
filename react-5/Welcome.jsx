import PropTypes from 'prop-types';

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>
        Benvenuto, {name}!
      </p>
      <p>La tua età è {age}</p>
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Welcome;