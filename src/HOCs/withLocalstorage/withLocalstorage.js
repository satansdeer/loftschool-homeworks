import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (
  localStorageKey,
  defaultValue
) => WrappedComponent => {
  return class extends Component {
    savedData = () =>
      load(localStorageKey) ? load(localStorageKey) : defaultValue;

    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    };

    render() {
      return (
        <WrappedComponent
          savedData={this.savedData()}
          saveData={this.saveData}
        />
      );
    }
  };
};

export default withLocalstorage;
