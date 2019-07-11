import React, { Component } from 'react';

export const wrapWithAbsolutePosition = WrappedComponent =>
  class WithAbsolutePosition extends Component {
    render() {
      return (
        <div style={{ position: 'absolute' }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
