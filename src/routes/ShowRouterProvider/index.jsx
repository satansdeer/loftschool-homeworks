import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox/LoadingBox';

const ShowRouterProvider = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      console.log('ShowRouterProvider props', this.props);

      const {
        computedMatch: {
          params: { id }
        }
      } = this.props;

      //   downloadDataForShow(id);
    }

    getLayoutContent = (isLoading, data) => {
      if (isLoading) {
        return <LoadingBox />;
      }
    };

    render() {
      const { isLoading, data } = this.props;
      return this.getLayoutContent(isLoading, data);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default ShowRouterProvider;
