import React, { Component } from 'react';

export default class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? 'go' : 'not go';

    return <div className="message-container">{message}</div>;
  }
}
