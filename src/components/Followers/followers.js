import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const {isLoading,data} = this.props;
    if (isLoading) return <div>Идет загрузка ...</div>
    if (!data.length) return <p className="t-no-followers">Нет информации о подписчиках</p>
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(el => {return(
          <div className={styles.follower}  key = {el.node_id}>
          <img className={styles.followerImg} src={el.avatar_url} alt ={el.login}/>
          <p className={styles.followerLogin}> {el.login}</p>
          </div>)
        })
        }
       {/* 
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
      */}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({isLoading: state.followers.isLoading ,data: state.followers.data}))(Followers);
