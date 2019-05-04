import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { getData, getIsLoading } from '../../modules/Followers';
import styles from './followers.module.css';

const Followers = props => {
  // Покажите статус загрузки
  // Если данные не были загружены - сообщите об этом пользователю
  const { follower, followerImg, followerLogin, root } = styles;
  const { isLoading, data } = props;

  if (isLoading) return <p>Загрузка информации о подписчиках</p>;

  return (
    <>
      {/*
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
      */}
      {data === null ? (
        <p>Нет информации о подписчиках</p>
      ) : (
        <div className={cx(styles.root, 't-followers')}>
          <div className={cx(root, 't-followers')}>
            {data.map(({ login, avatar_url }) => (
              <div className={follower}>
                <img className={followerImg} src={avatar_url} alt="" />
                <p className={followerLogin}>{login}</p>
              </div>
            ))}
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
}))(Followers);
