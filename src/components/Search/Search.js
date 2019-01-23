import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getData as getDataFollowers } from "../../modules/Followers/selectors";
import { getData as getDataUser } from "../../modules/User/selectors";
import { fetchUser } from "../../modules/User";
import { fetchFollowers } from "../../modules/Followers";
import styles from "./Search.module.css";
import Input from "../Input";
import UserInfo from "../UserInfo";
import Followers from "../Followers";
import Paragraph from "../Paragraph";


const message = {
  followers: {
    message: "Нет информации о подписчиках",
    errorMessage: "Информация о подписчиках не найдена"
  },
  users: {
    message: "Нет информации о пользователе",
    errorMessage: "Информация о пользователе не найдена"
  }
};


class Search extends PureComponent {
  state = {
    user: ""
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleKeyPress = event => {
    const { fetchUser, fetchFollowers } = this.props;
    const { user } = this.state;

    if (event.key === "Enter" && user.length > 0) {
      fetchUser(user);
      fetchFollowers(user);
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const { user } = this.state;
    const { dataUser, dataFollowers } = this.props;
    const isNotUserError = dataUser && !dataUser.message;
    const isNotFollowersError = dataFollowers && !dataFollowers.message;
    return (
      <div className={styles.root}>
        <Input
          ref={this.input}
          value={user}
          className='t-search-input'
          placeholder="Ник пользователя"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {isNotUserError
          ? <UserInfo data={dataUser}/>
          : <Paragraph
            className='t-no-user-info'
            message={dataUser && dataUser.message ? message.users.errorMessage : message.users.message}
          />
        }
        {isNotFollowersError
          ? <Followers data={dataFollowers}/>
          : <Paragraph
            className='t-no-followers'
            message={dataFollowers && dataFollowers.message ? message.followers.errorMessage : message.followers.message}
          />
        }
      </div>
    );
  }
}

const mapStateFromProps = state => {
  return {
    dataUser: getDataUser(state),
    dataFollowers: getDataFollowers(state)
  };
};

const mapDispatchFromProps = { fetchUser, fetchFollowers };

export default connect(mapStateFromProps, mapDispatchFromProps)(Search);