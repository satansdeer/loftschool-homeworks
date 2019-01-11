import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={styles.root}>
        {/* Отобразите данные о пользователе */}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({}))(UserInfo);
