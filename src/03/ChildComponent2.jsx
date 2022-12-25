import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <div>object: {String(Object.entries(objValue))}</div>
        <div>Required: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringValue: PropTypes.string.isRequired,
};
