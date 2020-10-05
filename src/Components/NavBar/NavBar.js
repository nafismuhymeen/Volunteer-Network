import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import logo from '../../Logo.png';
import './NavBar.css';

const NavBar = () => {
    // FireBase User Check
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let user = firebase.auth().currentUser;
    let userName = "hi";
    if (user != null) {
        userName = user.displayName;
    }
    // Matching Route
    const matchLogin = useRouteMatch("/login");
    const matchAdmin = useRouteMatch("/admin");
    const matchRegister = useRouteMatch("/register/:work");
    const matchAdminVolunList = useRouteMatch("/adminvolunlist");
    // Navigations
    const history = useHistory();

    const handleNav = () => {
        history.push("/home");
    }
    const handleAdmin = () => {
        history.push("/admin");
    }
    const handleLogin = () => {
        history.push("/login");
    }
    // Navbar Style




    return (
        <div className={matchLogin || matchAdmin || matchRegister || matchAdminVolunList ? "noRender" : "navbar d-flex align-items-center"}>
            <img className="navbar__logo" src={logo} alt="" />
            <div className="navbar__nav">
                <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '39px' }}><p onClick={handleNav}>Home</p></div>
                <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '39px' }}><p>Donation</p></div>
                <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '39px' }}><p onClick={handleNav}>Events</p></div>
                <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '39px' }}><p>Blog</p></div>
                <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '39px', fontWeight:"bolder" }} className={user ? "" : "donotRender"}><p onClick={()=>history.push('/user')}>{userName}</p></div>
                <button onClick={handleLogin} className={user ? "donotRender" : "btn btn-primary"}>Login</button>
                <button onClick={handleAdmin} className={user ? "donotRender" : "btn btn-dark"} style={{ marginLeft: "12px" }}>Admin</button>
            </div>
        </div>
    );
};

export default NavBar;