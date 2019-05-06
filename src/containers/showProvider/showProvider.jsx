import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getShowSelector,
  isLoadingShowSelector,
  showRequest
} from '../../redux/modules/show';

class WrappedContainer extends Component {
  downloadDataForShow = value => {
    const { downloadShow } = this.props;
    downloadShow(value);
  };

  render() {
    const { children, downloadShow, ...restProps } = this.props;

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        downloadDataForShow: this.downloadDataForShow,
        ...restProps
      })
    );
  }
}

const mapStateToProps = store => {
  return {
    showData: getShowSelector(store),
    showLoading: isLoadingShowSelector(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    downloadShow(id) {
      dispatch(showRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedContainer);
