// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';
import ShowPreview from '../ShowPreview';

import classNames from 'classnames';
import styles from './Search.module.css';

class Search extends Component {
  state = { inputValue: '' };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = () => {
    const { searchRequest } = this.props;
    const { inputValue } = this.state;
    searchRequest(inputValue);
    this.setState({ inputValue: '' });
  };

  handleSearchByEnter = event => {
    if (event.key === 'Enter') this.handleSearch();
  };

  render() {
    const { inputValue } = this.state;
    const { isLoading, series, error } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={classNames(styles.input, 't-input')}
            value={inputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleSearchByEnter}
            placeholder="Название сериала"
          />
          <div className={styles.buttonWrapper}>
            <button
              className={classNames(styles.button, 't-search-button')}
              onClick={this.handleSearch}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={classNames(styles.searchPanel, 't-search-result')}>
          {series.map(({ id, name, summary, image }) => (
            <ShowPreview
              key={id}
              id={id}
              name={name}
              summary={summary}
              image={image}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { series, isLoading, error } = state.search;
  return {
    series,
    isLoading,
    error
  };
};
const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
