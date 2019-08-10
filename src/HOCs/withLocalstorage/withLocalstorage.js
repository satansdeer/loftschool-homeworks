import React, {Component} from 'react';
import {load, save} from '../../localstorage';


const withLocalstorage = (RendComponent) => {
  return class TempHOC extends Component {
    storageData = [];
    savedData = () => {
      return load("TodoApp")
    }

    saveData = (value) => {
      console.log('TodoApp', value);
      save("TodoApp", value);
    }

    render() {
      return <RendComponent {...this.props} saveData={this.saveData} savedData={this.savedData}/>
    }
  }
}

export default withLocalstorage;
