import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initData) => WrappedComponent => {
  return class extends Component {
    state = {
      savedData:
        load(localStorageKey) !== null ? load(localStorageKey) : initData
    };

    // SaveData сохраняет данные в localstorage
    saveData = data => {
      save(localStorageKey, data);
      this.setState({ savedData: data });
    };

    render() {
      const { savedData } = this.state;

      return (
        <WrappedComponent
          savedData={savedData}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  };
};

export default withLocalstorage;
