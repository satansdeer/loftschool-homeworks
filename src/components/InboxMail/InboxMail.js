import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const { data, location } = this.props;
    const { inbox } = data;

    return inbox.map(record => {
      return location.pathname.indexOf(record.id) > 0 ? (
        <Mail
          className="t-mail-from"
          body={record.body}
          toFromLabel="From"
          toFrom={record.from}
          key={record.id}
        />
      ) : (
        ''
      );
    });
  }
}

export default withData(InboxMail);
