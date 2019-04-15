import React, { Component } from 'react';
import Form from '../Form';
import FormStateProvider from '../../containers/FormStateProvider';
import PhotoBox from '../PhotoBox';
import './App.css';

export default class App extends Component {
  state = {
    isValidForm: false
  };

  setValidApp = () => this.setState({ isValidForm: true });

  render() {
    const { isValidForm } = this.state;
    return (
      <div className="app-container">
        {!isValidForm ? (
          <FormStateProvider setValidApp={this.setValidApp}>
            <Form />
          </FormStateProvider>
        ) : (
          <PhotoBox />
        )}
      </div>
    );
  }
}
