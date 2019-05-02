// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './Search.module.css';

import { searchRequest } from '../../actions';
import ShowPreview from '.././ShowPreview';

//_REQUEST
//  isFetching: true

//_SUCCESS
//  isFetching: false
//  series: from fetch

//_FAILURE
//  isFetching: false
//  series: from fetch

class Search extends PureComponent {
  state = {
    inputValue: ''
  };

  HandleClick = () => {
    const { inputValue } = this.state;
    const { searchRequest } = this.props;
    this.setState({ inputValue: '' });
    searchRequest(inputValue);
  };

  HandleChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  render() {
    const { series, isFetching, error } = this.props;
    const { inputValue } = this.state;

    if (isFetching) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={cn(styles.input, 't-input')}
            placeholder="Название сериала"
            value={inputValue}
            onChange={this.HandleChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={cn(styles.button, 't-search-button')}
              onClick={this.HandleClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={cn(styles.searchPanel, 't-search-result')}>
          {series.map(({ summary, name, id, image }) => (
            <ShowPreview
              id={id}
              key={id}
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

const mapStateToProps = state => ({
  series: state.search.series,
  isFetching: state.search.isFetching,
  error: state.search.error
});
const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
