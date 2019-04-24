import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, data) => ChildComponent => {
  return class extends Component {
    savedData() {
      return load(key);
    }
    saveData(data) {
      if (load(key) !== null && load(key) !== undefined) {
        return save(key, [...load(key), data]);
      } else {
        return save(key, [data]);
      }
    }
    render() {
      return (
        <ChildComponent savedData={this.savedData} saveData={this.saveData} />
      );
    }
  };
};

export default withLocalstorage;
