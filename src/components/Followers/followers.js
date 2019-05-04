import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={cx(styles.root, 't-followers')}>
        {/* 
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
      */}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({}))(Followers);
