import React, { PureComponent, Fragment } from 'react';
import styles from './followers.module.css';
import { getData, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  renderFollowers = followers =>
    followers.map(({ id, login, avatar_url }) => {
      return (
        <div className={styles.follower} key={id}>
          <img className={styles.followerImg} src={avatar_url} alt={login} />
          <p className={styles.followerLogin}>{login}</p>
        </div>
      );
    });

  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { data, isLoading } = this.props;

    if (isLoading) return <p>Загрузка информации о подписчиках</p>;

    return (
      <Fragment>
        {/* 
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
      */}
        {!data ? (
          <p className="t-no-followers">Нет информации о подписчиках</p>
        ) : (
          <div className={cx(styles.root, 't-followers')}>
            {this.renderFollowers(data)}
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
}))(Followers);
