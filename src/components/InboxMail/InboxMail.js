import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.inbox.find(mail => mail.id === id);
    return (
      <Mail
        className="t-mail-from"
        body={mail.body}
        toFromLabel="From"
        toFrom={mail.from}
        key={mail.id}
      />
    );
  }
}

export default withData(InboxMail);
