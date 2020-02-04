import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}, props) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (props) {
                    return <Component />;
                } else {
                    return <Redirect to='/' />;
                }
            }}
        />
    );
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(
    mapStateToProps,
    {}
)(PrivateRoute);
