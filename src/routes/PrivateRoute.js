import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from '../components/NavBar';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated) {
                    return (
                        <ErrorBoundary>
                            <NavBar />
                            {/* <SideNav /> */}
                            <main
                                className="container"
                                id="private-route-layout"
                            >
                                <Component {...props} />
                            </main>
                        </ErrorBoundary>
                    );
                } else {
                    //enable this line below to make route protected
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

PrivateRoute.propTypes = {
    component: propTypes.object.isRequired,
    auth: propTypes.shape({
        isAuthenticated: propTypes.bool.isRequired
    })
};

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps)(PrivateRoute);
