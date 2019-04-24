// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import styles from './MailList.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class MailList extends PureComponent {
  render() {
    const { data, className } = this.props;
    console.log(data);
    return (
      <div className={cn(styles.container, `t-${className}-list`)}>
        {data.map(record => {
          return (
            <Link
              key={record.id}
              className={styles.link}
              to={`/app/${className}/${record.id}`}
              children={record.body}
            />
          );
        })}
      </div>
    );
  }
}

export default MailList;
