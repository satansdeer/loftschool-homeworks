import React, { Component } from 'react';
import styles from './Search.module.css';
import classNames from 'classnames';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';

class Search extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    this.props.searchRequest(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const search = this.props;
    return (
      <>
        <div className={styles.previewList}>
          <input
            className={classNames(styles.input, 't-input')}
            placeholder="Название сериала"
            value={value}
            onChange={this.handleChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={classNames(styles.button, 't-search-button')}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={classNames(styles.searchPanel, 't-search-result')}>
          {search.isFetching && <p>Данные загружаются</p>}
          {search.error.length > 0 && <p>Произошла ошибка при загрузке</p>}
          {search.data.length > 0 ? (
            <ShowPreview isFetching={search.isFetching} data={search.data} />
          ) : null}
        </div>
      </>
    );
  }
}

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

const mapStateToProps = state => state.search;

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: query => {
      dispatch(searchRequest(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
