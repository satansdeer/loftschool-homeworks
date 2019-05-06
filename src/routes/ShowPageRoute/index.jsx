import React from 'react';
import ShowRouterProvider from '../ShowRouterProvider';
import ShowPage from '../../components/pages/ShowPage/ShowPage';

const ShowPageWithDI = ShowRouterProvider(ShowPage);

const ShowPageRoute = props => <ShowPageWithDI {...props} />;

export default ShowPageRoute;
