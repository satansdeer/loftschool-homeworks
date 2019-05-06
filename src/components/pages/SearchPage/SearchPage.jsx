import React from 'react';
import styles from './SearchPage.module.css';
import Search from '../../Search';
import ShowPreview from '../../ShowPreview/ShowPreview';
import LoadingBox from '../../LoadingBox/LoadingBox';
import { EMPTY_STRING } from '../../../constants';

const normalLayout = ({ searchedShows = [], searchShows }) => {
  console.log('searchedShows in normalLayout', searchedShows);
  return (
    <div className={styles.container}>
      <Search onSearchChange={searchShows} />
      <div className={`t-search-result ${styles.Search_searchPanel}`}>
        {searchedShows &&
          searchedShows.map(item => (
            <ShowPreview
              image={
                item.image && item.image.medium
                  ? item.image.medium
                  : EMPTY_STRING
              }
              summary={item.summary}
              name={item.name}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};

const getSearchPageLayout = ({ searchedShows, searchShows, searchLoading }) => {
  if (searchLoading) {
    return <LoadingBox />;
  } else {
    return normalLayout({ searchedShows, searchShows });
  }
};

const SearchPage = props => {
  const { searchShows, shows: searchedShows, searchLoading } = props;
  console.log('SearchPage props', props);
  return getSearchPageLayout({ searchedShows, searchShows, searchLoading });
};

export default SearchPage;
