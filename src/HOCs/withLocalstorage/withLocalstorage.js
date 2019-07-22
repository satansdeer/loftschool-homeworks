import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, defaultValue) => ChildComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.saveData = this.saveData.bind(this);
    }

    savedData() {
      if (load(key) !== null) {
        return load(key);
      } else {
        return defaultValue;
      }
    }

    saveData(data) {
      save(key, data);
      this.forceUpdate();
    }

    render() {
      return (
        <ChildComponent saveData={this.saveData} savedData={this.savedData()} />
      );
    }
  };
};

export default withLocalstorage;
