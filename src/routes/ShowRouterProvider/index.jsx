import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox/LoadingBox';

const ShowRouterProvider = WrappedComponent => {
  return class extends Component {
    static defaultProps = {
      downloadDataForShow: id =>
        console.log('default downloadDataForShow, id', id)
    };

    componentDidMount() {
      console.log('ShowRouterProvider props', this.props);

      const {
        computedMatch: {
          params: { id }
        }
      } = this.props;

      this.props.downloadDataForShow(id);
    }

    getLayoutContent = (showLoading, data) => {
      if (showLoading) {
        return <LoadingBox />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    };

    render() {
      const { showLoading, data } = this.props;
      return this.getLayoutContent(showLoading, data);
    }
  };
};

export default ShowRouterProvider;
