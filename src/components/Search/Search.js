import React, { Component } from 'react';
import styles from './Search.module.css';
import classNames from 'classnames';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';
import { getIsFetching, getResult, getError } from '../../reducers/search';

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
    const { isFetching, error, result } = this.props;
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
          {isFetching && <p>Данные загружаются</p>}
          {error > 0 && <p>Произошла ошибка при загрузке</p>}

          {result.length > 0
            ? result.map(el => (
                <ShowPreview
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  summary={el.summary}
                  image={el.image}
                />
              ))
            : null}
        </div>
      </>
    );
  }
}

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

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
