import React from 'react';
import { Redirect } from 'react-router-dom';
import MailBox from '../../components/organisms/MailBox/MailBox';

const redirectToAuthPage = () => <Redirect to="/" />;

const renderMainLayout = props => <MailBox {...props} />;

const PrivateRoute = ({ isAuthorized, ...restProps }) =>
  !isAuthorized ? redirectToAuthPage() : renderMainLayout({ ...restProps });

export default PrivateRoute;
