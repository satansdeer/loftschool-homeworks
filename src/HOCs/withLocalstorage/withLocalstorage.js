import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initData) => WrappedComponent => {
  return class extends Component {
    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    };

    render() {
      const data = load(localStorageKey);
      return (
        <WrappedComponent
          savedData={data ? data : []}
          saveData={this.saveData}
        />
      );
    }
  };
};

export default withLocalstorage;
