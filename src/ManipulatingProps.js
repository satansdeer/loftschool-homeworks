import React from 'react';

const currentLoggedInUser = { name: 'Ivan', surname: 'Ivanov' };

export const addLoggedInUser = WrappedComponent =>
  class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} user={currentLoggedInUser} />;
    }
  };

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = Component =>
  class WithLoading extends React.Component {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...props} />;
    }
};
