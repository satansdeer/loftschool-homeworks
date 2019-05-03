// Реализуйте компонент OutboxMail по примеру InboxMail.
// Он должен показывать выбранное письмо на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать компонент Mail для отображения данных.

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class OutboxMail extends Component {
  render() {
    return <div>OutboxMail</div>;
  }
}

export default OutboxMail;
