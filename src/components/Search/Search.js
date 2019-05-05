// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';
import { searchRequest } from '../../middlewares/actions';
import { getIsFetching, getResult, getError } from '../../reducers/search';
import styles from './Search.module.css';

class Search extends PureComponent {
  state = {
    searchValue: ''
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleSearchClick = () => {
    const { searchRequest } = this.props;
    const { searchValue } = this.state;

    searchRequest(searchValue);
    this.setState({
      searchValue: ''
    });
  };

  render() {
    const { isFetching, error, result } = this.props;
    const { searchValue } = this.state;

    if (isFetching) return <p>Выполняется поиск...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={`${styles.input} t-input`}
            value={searchValue}
            placeholder="Название сериала"
            onChange={this.handleChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.handleSearchClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={`${styles.searchPanel} t-search-result`}>
          {result.map(item => (
            <ShowPreview key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inFetching: getIsFetching(state),
  result: getResult(state),
  error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
