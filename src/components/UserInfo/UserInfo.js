import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { isLoading, data } = this.props;
    if (isLoading) return <div>Идет загрузка ...</div>;
    if (!data.name)
      return <p className="t-no-user-info">Нет информации о пользователе</p>;

    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} alt="user info" src={data.avatar_url} />
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
  isLoading: state.user.isLoading,
  data: state.user.data
}))(UserInfo);
