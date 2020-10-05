import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const PrivetRoute = ({ children, ...rest }) => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    let user = firebase.auth().currentUser;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivetRoute;