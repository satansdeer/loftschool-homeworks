// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
class OutboxList extends PureComponent {
  render() {
    const {data} = this.props;
    const {outbox} = data; 

    return (
      <div className="t-outbox-list">
        <MailList className='outbox' data= {outbox}/>
      </div>
    );
  }
}

export default withData(OutboxList);
