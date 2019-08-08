import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../Auth/Auth';
import { DataProvider } from '../Data/Data';
import MainRouter from '../../routes/MainRouter/MainRouter';

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
