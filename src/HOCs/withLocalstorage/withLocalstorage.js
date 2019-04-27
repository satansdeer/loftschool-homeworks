import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, defaultData) => WrappedComponent => {
    return class extends Component {
        state = {
            savedData: load(storageKey) || defaultData
        }

        saveData = data => {
            save(storageKey, data);
            this.setState({ savedData: data });
        };

        render() {
            const { savedData } = this.state;

            return <WrappedComponent savedData={savedData} saveData={this.saveData} />
        }
    }
};

export default withLocalstorage;
