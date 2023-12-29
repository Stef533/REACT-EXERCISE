import React from 'react';
import PropTypes from 'prop-types';

class MouseClicker extends React.Component {
  handleClick = (event) => {
    console.log(event.target.name);
  }

  render() {
    return (
      <button name={this.props.name} onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

MouseClicker.propTypes = {
  name: PropTypes.string.isRequired
};

export default MouseClicker;