import React, { PureComponent } from 'react';
import cx from 'classnames';
import styles from './UserInfo.module.css';
import {
  getUser,
  getIsLoading as userLoading,
  getError as userError
} from '../../modules/User';
import { ErrorStub, LoadingStub } from '../AjaxStubs';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { user, userError, userLoading } = this.props;

    if (userError) {
      return (<ErrorStub error={`Ошибка получения пользователя: ${userError}`} />);
    }

    if(userLoading) {
      return (<LoadingStub />);
    }

    if (!user) return null;

    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={styles.root}>
        <div className={cx(styles.root, styles.imageWrapper)}>
          <img className={cx(styles.root, styles.image)} alt={user.login} src={user.avatar_url} />
        </div>
        <div>
          <p className="t-user-name">{user.login}</p>
          <p className="t-user-bio">{user.bio}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: getUser(state),
  userLoading: userLoading(state),
  userError: userError(state),
});

// Используйте поля data, isLoading из стейта
export default connect(mapStateToProps)(UserInfo);
