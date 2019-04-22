import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (
  localStorageKey,
  inicialValue
) => WrappedComponent => {
  class WithLocalstorage extends Component {
    static displayName = 'withLocalstorage';

    state = {
      savedData: load(localStorageKey)!==null ? load(localStorageKey): inicialValue
    };

    saveData = data => {
      save(localStorageKey, data);
      this.loadData();
    };

    loadData = () => {
      const newData = load(localStorageKey);
      this.setState({ savedData:  newData});
    }


    render() {
      const { forwardedRef, ...rest } = this.props;
      const { savedData } = this.state;
      return (
        <WrappedComponent
          savedData={savedData}
          saveData={this.saveData}
          ref={forwardedRef}
          {...rest}
        />
      );
    }
  }

  function forwardRef(props, ref) {
    return <WithLocalstorage {...props} forwardedRef={ref} />;
  }

  return React.forwardRef(forwardRef);
};

export default withLocalstorage;
