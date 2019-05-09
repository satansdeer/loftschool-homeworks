import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

import { getIsLoading, getData, getError } from '../../modules/User/reducer.js';

class UserInfo extends PureComponent {
  render() {
    const { isLoading, data, error } = this.props;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    if (isLoading) {
      return <p>Данные о пользователе загружаются...</p>;
    }
    if (error) {
      return <p>Произошла сетевая ошибка при загрузке данных...</p>;
    }
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          {data.avatar_url && (
            <img
              className={styles.image}
              src={data.avatar_url}
              alt={data.name}
            />
          )}
        </div>
        <div>
          <p className="t-user-name">{data.name}</p>
          <p className="t-user-bio">{data.bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
  error: getError(state)
}))(UserInfo);
