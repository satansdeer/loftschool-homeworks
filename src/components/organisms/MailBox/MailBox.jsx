import React from 'react';
import MailNavBox from '../../molecules/boxes/MailNavBox/MailNavBox';
import MailHeaderLayout from '../../molecules/layouts/MailHeaderLayout/MailHeaderLayout';
import MailContentLayout from '../../molecules/layouts/MailContentLayout/MailContentLayout';
import { withData } from '../../../containers/Data/Data';
import styles from './MailBox.module.css';

const { container, content, wrapper } = styles;

const MailContentLayoutWithData = withData(MailContentLayout);

const MailBox = props => (
  <div className={wrapper}>
    <div className={container}>
      <MailNavBox {...props} />
      <div className={content}>
        <MailHeaderLayout />
        <MailContentLayoutWithData />
      </div>
    </div>
  </div>
);

export default MailBox;
