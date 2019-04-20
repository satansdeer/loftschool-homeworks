import React, { memo } from 'react';
import { AuthConsumer } from '../../../../containers/Auth';
import Button from '../../../Button';
import './HeaderUserBlock.css';

const HeaderUserBlock = memo(({ logout, email }) => {
  return (
    <div className="header-menu">
      <p className="header-menu__email header-email t-header-email">{email}</p>
      <Button
        text="Выйти"
        additionalClassName="header-menu__button t-logout button"
        handleClick={logout}
      />
    </div>
  );
});

HeaderUserBlock.defaultProps = {
  logout: () => {},
  email: ''
};

export default HeaderUserBlock;
