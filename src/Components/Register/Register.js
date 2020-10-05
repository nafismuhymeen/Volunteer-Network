import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import logo from '../../Logo.png';
import './Register.css';
import { useHistory, useParams } from 'react-router-dom';

const Register = () => {
    // Calling UseParams
    const { work } = useParams();
    // FireBase User Check
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let user = firebase.auth().currentUser;
    console.log(user);
    // Register Form
    const [myEvents, setMyEvents] = useState({
        email: user.email,
        name: user.displayName,
        date: "",
        event: work
    })
    const handleChange = (e) => {
        if (e.target.name === "date") {
            let myEvent = { ...myEvents };
            myEvent[e.target.name] = e.target.value;
            setMyEvents(myEvent);
        }
    }
    let history = useHistory();
    const sendVolunData = () => {
        const myEvent = { ...myEvents };
        fetch('https://calm-inlet-05004.herokuapp.com/volunteers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(myEvent)
        })
        history.push('/home');
    }
    return (
        <div className="register">
            <img className="register__logo" src={logo} alt="" />
            <div className="register__form">
                <h2>Register as a Volunteer</h2>
                <form action="" autoComplete="off">
                    <input name="email" className="form__input" type="text" placeholder="Full Name" value={user.displayName} required /><br />
                    <input className="form__input" type="email" placeholder="Email" value={user.email} required /><br />
                    <input onChange={handleChange} className="form__input" type="date" placeholder="Date" name="date" required /><br />
                    <input className="form__input" type="text" placeholder="Description" /><br />
                    <input className="form__input" type="text" placeholder="Event" value={work} />
                    <button onClick={sendVolunData} style={{ marginTop: "30px" }} className="btn btn-primary">
                        Register
                </button>
                </form>
            </div><br /><br /><br />
        </div>
    );
};

export default Register;