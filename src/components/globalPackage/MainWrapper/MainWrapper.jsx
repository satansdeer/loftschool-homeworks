import React from 'react';
import styles from './MainWrapper.module.css';
import MainLayout from '../../../routes/MainLayout/MainLayout';
import SearchProvider from '../../../containers/SearchProvider/SearchProvider';

const MainWrapper = props => {
  return (
    <div className={styles.mainWrapper}>
      <SearchProvider>
        <MainLayout {...props} />
      </SearchProvider>
    </div>
  );
};

export default MainWrapper;
