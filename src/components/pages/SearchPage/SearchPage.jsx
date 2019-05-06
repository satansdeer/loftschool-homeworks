import React from 'react';
import styles from './SearchPage.module.css';
import Search from '../../Search';
import ShowPreview from '../../ShowPreview/ShowPreview';
import LoadingBox from '../../LoadingBox/LoadingBox';
import { EMPTY_STRING } from '../../../constants';

const normalLayout = ({ searchedShows = [], searchShows }) => (
  <div className={styles.container}>
    <Search onSearchChange={searchShows} />
    <div className={`t-search-result ${styles.Search_searchPanel}`}>
      {searchedShows &&
        searchedShows.map(({ image, summary, name, id }) => (
          <ShowPreview
            image={image ? image.medium : EMPTY_STRING}
            summary={summary}
            name={name}
            id={id}
            key={id}
          />
        ))}
    </div>
  </div>
);

const getSearchPageLayout = ({ searchedShows, searchShows, searchLoading }) => {
  if (searchLoading) {
    return <LoadingBox />;
  } else {
    return normalLayout({ searchedShows, searchShows });
  }
};

const SearchPage = props => {
  const { searchShows, shows: searchedShows, searchLoading } = props;

  return getSearchPageLayout({ searchedShows, searchShows, searchLoading });
};

export default SearchPage;
