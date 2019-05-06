import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getShowsSelector,
  isLoadingSelector,
  searchRequest
} from '../../redux/modules/search';

class WrappedContainer extends Component {
  searchShows = value => {
    const { searchShows } = this.props;
    searchShows(value);
  };

  render() {
    const { children, searchShows, ...restProps } = this.props;

    return React.Children.map(children, child =>
      React.cloneElement(child, { searchShows: this.searchShows, ...restProps })
    );
  }
}

const mapStateToProps = store => {
  return {
    shows: getShowsSelector(store),
    searchLoading: isLoadingSelector(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchShows(value) {
      dispatch(searchRequest(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedContainer);
