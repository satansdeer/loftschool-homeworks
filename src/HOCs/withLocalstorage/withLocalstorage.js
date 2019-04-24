import React, { useState } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, initVal) => WrappedComponent => {
  const Wrapper = props => {
    const [value, setValue] = useState(true);

    const loadData = () => load(key) || initVal;
    const saveData = val => {
      save(key, val);
      setValue(!value);
    };

    return (
      <WrappedComponent {...props} savedData={loadData()} saveData={saveData} />
    );
  };

  return props => <Wrapper {...props} />;
};

export default withLocalstorage;
