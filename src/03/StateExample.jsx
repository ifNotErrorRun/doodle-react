import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading Value', this.state.loading);
  }
  render() {
    return (
      <div>
        <span>loading: {String(this.state.loading)}</span>
        <span>result: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
