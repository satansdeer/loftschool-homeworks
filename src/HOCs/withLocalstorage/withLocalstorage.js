import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localstorageKey, defaultData) => (WrappedComponent) => {
    return class extends Component {
        state = {
            savedData: load(localstorageKey) ? load(localstorageKey) : defaultData
        };
        saveData = (data) => {
            save(localstorageKey, data);
            this.setState({ savedData:data });
        }
        render() {
            const { savedData } = this.state;
            return(<WrappedComponent                
                savedData={savedData}
                saveData={this.saveData}
                {...this.props} />);
        }
    }
};

export default withLocalstorage;
