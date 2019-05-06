import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getShowsSelector,
  searchMiddleware,
  isLoadingSelector
} from '../../redux/modules/search';

class WrappedContainer extends Component {
  searchShows = value => {
    const { searchShows } = this.props;
    console.log('check search value before to send', value);
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
      dispatch(searchMiddleware(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedContainer);
