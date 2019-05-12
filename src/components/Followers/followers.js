import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import styles from './followers.module.css';
import {
  getFollowers,
  getIsLoading as followersLoading,
  getError as followersError
} from '../../modules/Followers';
import { ErrorStub, LoadingStub } from '../AjaxStubs';

class Followers extends PureComponent {
  renderFollower = follower => {
    return (
      <div className={cx(styles.root, styles.follower)} key={follower.id}>
        <img
          className={cx(styles.root, styles.followerImg)}
          alt={follower.login}
          src={follower.avatar_url}
        />
        <p className={cx(styles.root, styles.followerLogin)}>
          {follower.login}
        </p>
      </div>
    );
  };

  render() {
    const { followers, followersLoading, followersError } = this.props;

    if (followersError) {
      return (
        <ErrorStub error={`Ошибка получения подписчиков: ${followersError}`} />
      );
    }

    if (followersLoading) {
      return <LoadingStub />;
    }

    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={cx(styles.root, 't-followers')}>
        {followers && followers.map(follower => this.renderFollower(follower))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: getFollowers(state),
  followersLoading: followersLoading(state),
  followersError: followersError(state)
});

// Используйте поля data, isLoading из стейта
export default connect(mapStateToProps)(Followers);
