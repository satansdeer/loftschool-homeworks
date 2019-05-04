// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { withData } from '../../context/Data';
import { MailList } from '../MailList';

class InboxList extends Component {
  render() {
    const { match, data } = this.props;
    console.log({ data: data.inbox });
    return (
      <div>
        {/* <MailList /> */}
        <ul>
          {data.inbox.map(({ id, from }) => (
            <MailList id={id} from={from} />
          ))}
        </ul>
      </div>
    );
  }
}

export default withData(InboxList);
