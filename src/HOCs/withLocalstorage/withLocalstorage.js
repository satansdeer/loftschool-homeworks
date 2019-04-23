import React from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, initVal) => WrappedComponent => {
  const loadData = () => load(key) || initVal;
  const saveData = val => save(key, val);

  return () => <WrappedComponent savedData={loadData} saveData={saveData} />;
};

export default withLocalstorage;
