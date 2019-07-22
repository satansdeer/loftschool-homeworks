import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, defaultData) => WrappedComponent => {
  return class extends Component {
    state = {
      savedData: !!load(localStorageKey) ? load(localStorageKey) : defaultData
    };

    saveData = data => {
      save(localStorageKey, data);
      this.setState({ savedData: data });
    };

    render() {
      const { savedData } = this.state;
      return (
        <WrappedComponent savedData={savedData} saveData={this.saveData} />
      );
    }
  };
};

export default withLocalstorage;
