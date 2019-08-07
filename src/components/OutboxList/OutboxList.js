import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends Component {
  render() {
    const { data } = this.props;
    const { pathname } = this.props.location;
    return <MailList data={data.outbox} mod="t-outbox-list" path={pathname} />;
  }
}

export default withData(OutboxList);

// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
