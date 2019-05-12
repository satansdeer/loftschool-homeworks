import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResult, getError, getIsFetching } from 'reducers/search';
import { searchRequest } from 'actions/search';
import ShowPreview from 'components/ShowPreview';
import styles from './Search.module.css';
import cx from 'classnames';

export class Search extends Component {
  state = {
    searchValue: ''
  };
  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    const { searchValue } = this.state;

    searchRequest(searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;
    const { isFetching, error, result } = this.props;
    if (isFetching) {
      return <p>Выполняется поиск</p>;
    }
    if (error) {
      return <p>Произошла ошибка: {error}</p>;
    }

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={cx(styles.input, 't-input')}
            value={searchValue}
            onChange={this.handleChange}
            placeholder="Название сериала"
          />
          <div className={styles.buttonWrapper}>
            <button
              className={cx(styles.button, 't-search-button')}
              onClick={this.handleClick}
            >
              Найти
            </button>
          </div>
        </div>

        <div className={'t-search-result', 'searchPanel'}>
          {result.map(show => (
            <ShowPreview {...{ ...show, key: show.id }} />
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

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
