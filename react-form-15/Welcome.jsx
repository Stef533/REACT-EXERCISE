import PropTypes from 'prop-types';

const Welcome = (props) => {
  return (
    <div className={props.className}>
      {/* Content of the Welcome component */}
      <h1>Welcome to my app!</h1>
    </div>
  );
};

Welcome.propTypes = {
  className: PropTypes.string, // Validate that className is a string
};

export default Welcome;