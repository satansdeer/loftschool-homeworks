import React from 'react';
import Form from '../Form';
import FormStateProvider from '../../containers/FormStateProvider';
import './App.css';

export default () => (
  <div className="app-container">
    <FormStateProvider>
      <Form />
    </FormStateProvider>
  </div>
);
