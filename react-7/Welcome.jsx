import Age from './Age';
import PropTypes from 'prop-types';

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>
        Benvenuto, <strong>{name}</strong>!
      </p>
      {age > 18 && <Age age={age} />} 
      {age !== undefined && <Age age={age} />} 
      {(age > 18 && age < 65) && <Age age={age} />} 
      {age > 18 && name === "John" && <Age age={age} />} 
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default Welcome;