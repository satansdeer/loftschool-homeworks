import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLocalstorage;
