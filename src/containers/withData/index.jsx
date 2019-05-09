import React, { Component } from 'react';

const WithData = WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...props} />;
    }
  };
};

export default WithData;
