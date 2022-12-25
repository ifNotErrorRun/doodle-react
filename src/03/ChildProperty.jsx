import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};
