// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';
class OutboxList extends PureComponent {
  render() {
    const {data} = this.props;
    const {inbox} = data; 
    return (
      <div className="t-inbox-list">
        <MailList className='inbox'  data= {inbox}/>
      </div>
    );
  }
}

export default withData(OutboxList);