import React, { Component } from 'react';

export const withDisplayName = WrappedComponent =>
  class WithDisplayName extends Component {
    static displayName = `HOC${WrappedComponent.displayName || 'Component'}`

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
