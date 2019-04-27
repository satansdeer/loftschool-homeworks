import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, initialValue) => WrappedComponent => {
  class Wrapper extends Component {
    saveData = data => {
      save(storageKey, data);
      this.forceUpdate();
    };

    loadData = () => load(storageKey) || initialValue;

    render() {
      return (
        <WrappedComponent
          savedData={this.loadData()}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  }

  return Wrapper;
};

export default withLocalstorage;
