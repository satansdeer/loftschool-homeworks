import React, { memo } from 'react';
import Button from '../../../Button';
import './FooterUserBlock.css';

const FooterUserBlock = memo(({ email }) => {
  return <p className="footer-message t-footer">Вы вошли как {email}</p>;
});

FooterUserBlock.defaultProps = {
  email: ''
};

export default FooterUserBlock;
