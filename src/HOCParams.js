import React, { Component } from 'react';

export const withGivenProps = givenProps => WrappedComponent =>
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} {...givenProps} />;
    }
  };
