import PropTypes from 'prop-types';

export function Color({ color }) {
  return <li>{color.name}</li>;
}

Color.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};