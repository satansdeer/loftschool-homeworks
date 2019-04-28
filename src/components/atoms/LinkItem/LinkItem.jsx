import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkItem.module.css';

const { navelement, link } = styles;

const LinkItem = ({ text, path, additionalClassName }) => (
  <li className={navelement}>
    <NavLink
      exact
      to={path}
      className={`${link} ${additionalClassName}`}
      activeClassName="active"
    >
      {text}
    </NavLink>
  </li>
);

export default LinkItem;
