import React, { Component } from 'react';

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = WrappedComponent => 
  class WithLoading extends Component {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <WrappedComponent {...props} />;
    }
  };

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user
*/

const currentLoggedInUser = { name: 'Ivan', surname: 'Ivanov' };

export const addLoggedInUser = WrappedComponent => 
  class WithLoggedInUser extends Component {
    render() {
      return <WrappedComponent {...this.props} user={currentLoggedInUser} />;
    }
  };

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Пускай компонент WrappedComponent 
*/

export const sort = WrappedComponent => 
  class WithLoggedInUser extends Component {
    render() {
      return <WrappedComponent {...this.props} user={currentLoggedInUser} />;
    }
  };
