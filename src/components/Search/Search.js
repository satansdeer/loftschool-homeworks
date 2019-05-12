// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ShowPreview from '../ShowPreview';
import { searchRequest } from '../../actions';
import { getIsFetching, getResult, getError } from '../../reducers/search';
import classNames from 'classnames';
import styles from './Search.module.css';

class Search extends Component {
  state = {
    value: ''
  };

  onChangeFind = event => {
    this.setState({ value: event.target.value });
  };

  onClickFind = event => {
    this.props.searchRequest(this.state.value);
    this.setState({ value: '' });
  };

  renderPreviews = items => {
    return items.map(row => <ShowPreview key={row.id} {...row} />);
  };

  render() {
    const { value } = this.state;
    const { isFetching, error, result } = this.props;
    return (
      <Fragment>
        <div className={styles.previewList}>
          <input
            placeholder="Название сериала"
            value={value}
            onChange={this.onChangeFind}
            className={classNames(styles.input, 't-input')}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={classNames(styles.button, 't-search-button')}
              onClick={this.onClickFind}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={classNames(styles.searchPanel, 't-search-result')}>
          {isFetching ? <p>Данные загружаются</p> : null}
          {error ? <p>Произошла ошибка при загрузке</p> : null}
          {result.length ? this.renderPreviews(result) : null}
        </div>
      </Fragment>
    );
  }
}

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
