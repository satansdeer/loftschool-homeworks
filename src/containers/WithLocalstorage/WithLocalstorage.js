import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const loadData = () => {
  console.log('localStorage.items', localStorage.items);
  if (localStorage.items && localStorage.items !== 'undefined') {
    console.log('check');
    return JSON.parse(localStorage.items);
  }
  return [];
};

const saveData = data => {
  console.log('saveData', data);
  localStorage.items = JSON.stringify(data);
};

const WithLocalstorage = ({ component: WrappedComponent }) => (
  <WrappedComponent saveData={saveData} loadData={loadData} />
);

export default WithLocalstorage;
