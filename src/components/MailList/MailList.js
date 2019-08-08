import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

class MailList extends PureComponent {
  renderListItem = listItem => {
    const { match } = this.props;
    const tilte = listItem.body.slice(0, 55);

    return (
      <Link
        key={listItem.id}
        className={styles.link}
        to={`${match.url}/${listItem.id}`}
      >
        {`${tilte}...`}
      </Link>
    );
  };

  render() {
    const { mailData } = this.props;
    return mailData.map(x => this.renderListItem(x));
  }
}

export default MailList;