// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import styles from './Search.module.css';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';
import { getIsFetching, getResult, getError } from '../../reducers/search';
import { searchRequest } from '../../actions';

class Search extends Component {
  state = {
    inputValue: ''
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const { inputValue } = this.state;
    const { searchRequest } = this.props;

    if (inputValue) {
      searchRequest(inputValue);
    }
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    const { isFetching, result, error } = this.props;

    if (isFetching) return <p>Выполняется поиск...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={`${styles.input} t-input`}
            placeholder="Название сериала"
            onChange={this.handleChange}
            value={inputValue}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={`t-search-result ${styles.searchPanel}`}>
          {result.map(item => (
            <ShowPreview key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: getResult(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
