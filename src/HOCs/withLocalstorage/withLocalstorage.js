import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = withLocalstorage => WrappedComponent =>
  class LocalStorage extends Component {
    render() {
      return <WrappedComponent savedData={load} saveData={save} />;
    }
  };

export default withLocalstorage;
