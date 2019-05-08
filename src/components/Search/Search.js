import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchSearchRequest } from '../../actions';
import ShowPreview from '../ShowPreview';
import classnames from 'classnames';
import styles from './Search.module.css';
import { getSearchItems, getIsLoading, getError } from '../../selectors/search';
import { ErrorStub, LoadingStub } from '../AjaxStubs';

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

class Search extends PureComponent {
  state = {
    searchText: ''
  };

  handleSearchInputChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      searchText: value
    });
  };

  handleSearchButtonCick = e => {
    const { searchText } = this.state;
    const { fetchSearchRequest } = this.props;

    if (!searchText) {
      return;
    }

    fetchSearchRequest(searchText);
  };

  renderSearchResults = () => {
    const { searchItems } = this.props;

    return (
      <div
        className={classnames('t-search-result', 'Search', styles.searchPanel)}
      >
        {searchItems.map(item => (
          <ShowPreview
            key={item.id}
            id={item.id}
            name={item.name}
            summary={item.summary}
            image={item.image}
          />
        ))}
      </div>
    );
  };

  renderSearchInput = () => {
    const { searchText } = this.state;

    return (
      <div className={classnames('Search', styles.previewList)}>
        <input
          className={classnames('Search', styles.input, 't-input')}
          placeholder="Название сериала"
          value={searchText}
          onChange={this.handleSearchInputChange}
        />
        <div className={classnames('Search', styles.buttonWrapper)}>
          <button
            className={classnames('Search', styles.button, 't-search-button')}
            onClick={this.handleSearchButtonCick}
          >
            Найти
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { isLoading, error } = this.props;

    if (error) return <ErrorStub error={error} />;

    if (isLoading) return <LoadingStub />;

    return (
      <div>
        {this.renderSearchInput()}
        {this.renderSearchResults()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchItems: getSearchItems(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = { fetchSearchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
