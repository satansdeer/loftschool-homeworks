import React from 'react';
import { connect } from 'react-redux';
import { getData, getIsLoading } from '../../modules/User';
import styles from './UserInfo.module.css';

const UserInfo = props => {
  // Покажите статус загрузки
  // Если данные не были загружены - сообщите об этом пользователю
  const { root, image, imageWrapper } = styles;
  const { isLoading, data, name, bio } = props;

  if (isLoading) return <p>Загрузка информации о подписчиках</p>;

  return (
    <>
      {/* Отобразите данные о пользователе */}
      {data === null ? (
        <p>Нет информации о пользователе</p>
      ) : (
        <div className={root}>
          <div className={imageWrapper}>
            <img className={image} src={data.avatar_url} alt="user info" />
          </div>
          <div>
            <p className="t-user-name">{name}</p>
            <p className="t-user-bio">{bio}</p>
          </div>
        </div>
      )}
    </>
  );
};

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(UserInfo);
