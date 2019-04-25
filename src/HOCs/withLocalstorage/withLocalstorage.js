import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultValue) => ChildComponent => {
  return class extends Component {
    savedData() {
      if (load(key) !== null) {
        return load(key);
      } else {
        return defaultValue;
      }
    }
    saveData(data) {
      save(key, data);
    }
    render() {
      return (
        <ChildComponent saveData={this.saveData} savedData={this.savedData} />
      );
    }
  };
};

export default withLocalstorage;
