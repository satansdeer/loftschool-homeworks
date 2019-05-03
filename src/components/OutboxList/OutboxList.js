// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class OutboxList extends Component {
  render() {
    return <div>OutboxList</div>;
  }
}

export default OutboxList;
