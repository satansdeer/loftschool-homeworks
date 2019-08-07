import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const WithLocalstorage = () => WrappedComponent => {
  return class IntendLocalStorage extends Component {
    render() {
      return <WrappedComponent saveData={save} savedData={load} />;
    }
  };
};

export default WithLocalstorage;
