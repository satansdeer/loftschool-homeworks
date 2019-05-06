import React from 'react';
import styles from './MainWrapper.module.css';
import MainLayout from '../../../routes/MainLayout/MainLayout';
import SearchProvider from '../../../containers/SearchProvider/SearchProvider';
import ShowProvider from '../../../containers/ShowProvider/ShowProvider';

const MainWrapper = () => {
  return (
    <div className={styles.mainWrapper}>
      <SearchProvider>
        <ShowProvider>
          <MainLayout />
        </ShowProvider>
      </SearchProvider>
    </div>
  );
};

export default MainWrapper;
