import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';
import { getIsFetching, getResult, getError } from '../../reducers/search';
import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
const Search = props => {
  const { input, button, buttonWrapper, previewList, searchPanel } = styles;
  const { searchRequest, isFetching, result, error } = props;

  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => setSearchValue(e.target.value);
  const handleClick = () => {
    searchRequest(searchValue);
    setSearchValue('');
  };

  if (isFetching) return <p>Данные загружаются...</p>;
  if (error) return <p>Произошла сетевая ошибка</p>;

  return (
    <div>
      <div className={previewList}>
        <input
          className={`${input} t-input`}
          placeholder="Название сериала"
          value={searchValue}
          onChange={handleChange}
        />
        <div className={buttonWrapper}>
          <button className={`${button} t-search-button`} onClick={handleClick}>
            Найти
          </button>
        </div>
      </div>
      <div className={`t-search-result ${searchPanel}`}>
        {result.map(el => (
          <ShowPreview key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
