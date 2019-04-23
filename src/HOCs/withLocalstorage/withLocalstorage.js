import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, data) => ChildComponent => {
  return class extends Component {
    savedData(key) {
      return load(key);
    }
    saveData(key, data) {
      let loaded = load(key) !== null ? load(key) : {};
      save(key, [...loaded, data]);
    }
    render() {
      return (
        <ChildComponent savedData={this.savedData} saveData={this.saveData} />
      );
    }
  };
};

export default withLocalstorage;
