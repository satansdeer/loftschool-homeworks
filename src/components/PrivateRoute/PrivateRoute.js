import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { isAuthorized, component: RouteComponent, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={routeProps =>
                    isAuthorized ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                            <Redirect to="/login" />
                        )
                }
            />
        );
    }
}

export default withAuth(PrivateRoute);
