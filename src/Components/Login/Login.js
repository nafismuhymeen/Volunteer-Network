import React from 'react';
import firebaseConfig from '../../firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from '../../Logo.png'
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handlesignIn = ()=>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
            if (from) {
                history.replace(from);
            }
            else{
                history.push('/')
            }

          }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
          });
    }
    
    return (
        <div className="login">
            <img className="login__logo" src={logo} alt=""/>
            <div className="login__form">
                <h2>Login/SignUp</h2>
                <div onClick={handlesignIn} className="form__google">
                <i className="fab fa-google"></i>
                    <p>Continue With Google</p>
                </div>
                <p>SignUp or Login to your account</p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Login;