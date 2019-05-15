import React, { PureComponent } from 'react';
import st from './UserInfo.module.css';
import { getData, getIsLoading } from '../../modules/User/';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  renderUserInfo = data => {
    const { avatar_url, login, followers } = data;
    console.log('followers',followers);

    return (
      <div>
        <div className={st.imageWrapper}>
          <img className={st.image} src={avatar_url} alt="avatar" />
        </div>
        <div>
          <p className="t-user-name">{login ? login : 'Информация не получена'}</p>
          <p className="t-user-bio">Подписчиков {followers || 0}</p>
        </div>
      </div>
    );
  };

  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props;

    if (isLoading) return <p>Загрузка информации о пользователе</p>;

    return (
      <div>
        {!data ? (
          <p className="t-no-user-info">Нет информации о пользователе</p>
        ) : (
          <div className={st.root}>
            {data.id ? (
              this.renderUserInfo(data)
            ) : (
              <p>Информация о пользователе не найдена</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(UserInfo);
