import React from 'react';
import styles from './SearchPage.module.css';
import Search from '../../Search';
import ShowPreview from '../../ShowPreview/ShowPreview';
import { EMPTY_STRING } from '../../../constants';

const normalLayout = ({ searchedShows = [], searchShows }) => {
  console.log('searchedShows in normalLayout', searchedShows);
  return (
    <div className={styles.container}>
      <Search onSearchChange={searchShows} />
      {searchedShows &&
        searchedShows.map(item => (
          <ShowPreview
            imageSrc={
              item.image && item.image.medium ? item.image.medium : EMPTY_STRING
            }
            description={item.summary}
            title={item.name}
            id={item.id}
            key={item.id}
          />
        ))}
    </div>
  );
};

const getSearchPageLayout = ({ searchedShows, searchShows, isLoading }) => {
  if (isLoading) {
    return <p>LoadingBox</p>;
  } else {
    return normalLayout({ searchedShows, searchShows });
  }
};

const SearchPage = props => {
  const { searchShows, shows: searchedShows, isLoading } = props;
  console.log('SearchPage props', props);
  return getSearchPageLayout({ searchedShows, searchShows, isLoading });
};

export default SearchPage;
