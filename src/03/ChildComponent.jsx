import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <div>boolean: {boolValue}</div>
        <div>number: {numValue}</div>
        <div>array: {arrayValue}</div>
        <div>object: {String(objValue)}</div>
        <div>node: {nodeValue}</div>
        <div>function: {String(funcValue)}</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
