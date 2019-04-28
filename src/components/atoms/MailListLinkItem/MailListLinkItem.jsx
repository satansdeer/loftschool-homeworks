import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MailListLinkItem.module.css';

const link = styles.listlink;

const MailListLinkItem = ({ text, path }) => (
  <NavLink to={path} exact className={`${link} t-link-home`}>
    {text}
  </NavLink>
);

export default MailListLinkItem;
