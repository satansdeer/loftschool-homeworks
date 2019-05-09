import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

import {
  getIsLoading,
  getData,
  getError
} from '../../modules/Followers/reducer.js';

class Followers extends PureComponent {
  render() {
    const { isLoading, data, error } = this.props;
    console.log(data);
    if (isLoading) {
      return <p>Данные о пользователе загружаются...</p>;
    }
    if (error) {
      return <p>Произошла сетевая ошибка при загрузке данных...</p>;
    }
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.length > 0 &&
          data.map(el => (
            <div className={styles.follower} key={el.id}>
              <img
                className={styles.followerImg}
                src={el.avatar_url}
                alt={el.login}
              />
              <p className={styles.followerLogin}>{el.login}</p>
            </div>
          ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
  error: getError(state)
}))(Followers);
