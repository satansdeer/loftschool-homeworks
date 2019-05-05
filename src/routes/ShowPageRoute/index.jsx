import React from 'react';
import { Route } from 'react-router-dom';
import ShowRouterProvider from '../ShowRouterProvider';
import ShowPage from '../../components/pages/ShowPage/ShowPage';

const ShowPageWithDI = ShowRouterProvider(ShowPage);

const ShowPageRoute = props => <ShowPageWithDI {...props} testProp="123" />;

export default ShowPageRoute;
