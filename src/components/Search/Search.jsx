// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import styles from './Search.module.css';

const ENTER_KEY_CODE = 13;

export default class Search extends Component {
  static defaultProps = {
    onSearchChange: () => console.log('default onSearchChange')
  };

  state = {
    searchString: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchString: value });
  };

  handleClick = () => {
    const { searchString } = this.state;
    const { onSearchChange } = this.props;

    if (searchString) {
      onSearchChange(searchString);
    }
  };

  handleKeyDown = ({ keyCode }) => {
    const { searchString } = this.state;
    const { onSearchChange } = this.props;

    if (keyCode === ENTER_KEY_CODE && searchString) {
      onSearchChange(searchString);
    }
  };

  render() {
    const { searchString } = this.state;

    return (
      <div className={styles.previewList}>
        <input
          className={styles.input + ' t-input'}
          placeholder="Название сериала"
          onChange={this.handleChange}
          value={searchString}
        />
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button + ' t-search-button'}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
          >
            Найти
          </button>
        </div>
      </div>
    );
  }
}
