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
    console.log(mail);
    return (
      <Mail
        className="t-mail-to"
        body={mail.body}
        toFromLabel="To"
        toFrom={mail.to}
        key={mail.id}
      />
    );
  }
}

export default withData(OutboxMail);
