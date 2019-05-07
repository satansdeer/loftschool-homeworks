import React, { PureComponent, Fragment } from 'react';
import styles from './UserInfo.module.css';
import { getData, getIsLoading } from '../../modules/User/';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  renderUserInfo = data => {
    const { avatar_url, name, bio } = data;

    return (
      <Fragment>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={avatar_url} alt="user info" />
        </div>
        <div>
          <p className="t-user-name">{name ? name : ''}</p>
          <p className="t-user-bio">{bio ? bio : ''}</p>
        </div>
      </Fragment>
    );
  };

  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props;

    if (isLoading) return <p>Загрузка информации о пользователе</p>;

    return (
      <Fragment>
        {/* Отобразите данные о пользователе */}
        {!data ? (
          <p className="t-no-user-info">Нет информации о пользователе</p>
        ) : (
          <div className={styles.root}>
            {data.id ? (
              this.renderUserInfo(data)
            ) : (
              <p>Информация о пользователе не найдена</p>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(UserInfo);
