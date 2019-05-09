// Реализуйте компонент OutboxMail по примеру InboxMail.
// Он должен показывать выбранное письмо на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать компонент Mail для отображения данных.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class OutboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.outbox.find(mail => mail.id === id);

    return <Mail {...mail} />;
  }
}

export default withData(OutboxMail);
