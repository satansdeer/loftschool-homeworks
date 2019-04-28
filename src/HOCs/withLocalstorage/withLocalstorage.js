import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localstorageKey, initValue) => WrappedComponent => {
  return class extends Component {
    state = {
      SavedData: [],
      SaveData: {
        id: '',
        isComplete: false,
        text: ''
      }
    };
    componentDidMount() {
      this.get();
    }
    get = () => {
      const { SavedData } = this.state;
      this.setState({ SavedData: load(localstorageKey) });
      console.log(SavedData);
    };

    create = () => {
      const { SaveData } = this.state;
      save(localstorageKey, SaveData);
      console.log(SaveData);
    };

    render() {
      const { SavedData, SaveData } = this.state;
      return (
        <WrappedComponent
          savedData={SavedData}
          saveData={SaveData}
          create={this.create}
          {...this.props}
        />
      );
    }
  };
};

export default withLocalstorage;
