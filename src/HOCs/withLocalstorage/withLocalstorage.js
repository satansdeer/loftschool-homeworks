import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localstorageKey, initValue) => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      const data = load(localstorageKey) || initValue;
      this.state = { data };
    }

    saveData = data => {
      save(localstorageKey, data);
      this.setState({
        data
      });
    };

    render() {
      const { data } = this.state;

      return (
        <WrappedComponent
          savedData={data}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  };
};

export default withLocalstorage;
