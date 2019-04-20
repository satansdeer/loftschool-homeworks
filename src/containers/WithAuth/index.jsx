import React, { Component } from 'react';
import { AuthConsumer } from '../Auth';

export class WithAuth extends Component {
  render() {
    return (
      <AuthConsumer>
        {value =>
          React.Children.map(this.props.children, child =>
            React.cloneElement(child, { ...value })
          )
        }
      </AuthConsumer>
    );
  }
}
