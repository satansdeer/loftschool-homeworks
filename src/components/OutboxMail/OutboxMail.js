import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class OutboxMail extends PureComponent {
  render() {
    const { data, location } = this.props;
    const { outbox } = data;

    return outbox.map(record => {
      return location.pathname.indexOf(record.id) > 0 ? (
        <Mail
          className="t-mail-to"
          body={record.body}
          toFromLabel="To"
          toFrom={record.to}
          key={record.id}
        />
      ) : (
        ''
      );
    });
  }
}

export default withData(OutboxMail);
