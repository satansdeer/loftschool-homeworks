import { withData } from '../../context/Data';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MailList.css';

class MailList extends Component {
  render() {
    const { classes, match, type, data } = this.props;
    return (
      <div className={`${classes} mail-list-container`}>
        {data[type].map(message => (
          <Link className="mail-link" to={`${match.url}/${message.id}`}>
            {message.body.slice(0, 51)}...
          </Link>
        ))}
      </div>
    );
  }
}

export default withData(MailList);
