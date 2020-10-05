import React, { useEffect, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './User.css'

const User = () => {
    const [events, setEvents] = useState([])
    // FireBase User Check
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let user = firebase.auth().currentUser;
    let email = "hi";
    if (user) {
        email = user.email;
        
    }
    useEffect(() => {
        fetch(`https://calm-inlet-05004.herokuapp.com/myevents?email=${email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    // Delete Event
    const deleteEvent = (id)=>{
        fetch(`https://calm-inlet-05004.herokuapp.com/deleteevent/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
    console.log(events);
    return (
        <div className="user">
            {
                events.map(event => <div className="user__card">
                    <img src="https://lh3.googleusercontent.com/6RQZ30exRgT0nxQFeC2ZrdCdSfn2gDP75PUhf11jWnqfjBoRPMmNgXjeqnGJ7NA0xhSwHI9JoSDfQfoHVRTI4tj79FYLBcJPjf2v0YK5v_tEVy-pqJBlGGwH8RBtHDcU57Xj3ed0EOjNQC3mPeMy-WiggJUpdv7CgbV5JSj9VPtZ9qEMJk8sF5p3veI8BHS6zOqQZU98Q_1HB_ayowhkHPT7BJREWA8-1YuljCIdB2MYpy2iIcpaqBURaKMjomnZppMaY7MSL0TrmZoOPrLtFB8qHxIZpYda7CKVrn7Op2bC2yk8LNmLo4nA7JAhEBf631cuxDCtH0mlvYzPGr8bIEwkuTBpeg-QFav1tIqDCPme4YApBfnszQBPZ2j5_RT3YXa_KH0tGMMFqy58nkuIQ6GrH4nlcQRb41_3xnkKZHuHK-bmAYTyMGglO735cDQeMicMnsX3jvoCgj_l-B-qNaukalVa0H3dqY-hUxQIjo8nXP4pa0Ai0Wjti85Qs2TtrQhDzCIUvO8hCJ6j3bgmXD1Pe5JWpvkd7YQwgoBtEVkgvCFfO8tcmIm1IwLOB4X7WTpVt6liKirzOd-Ak9HvIizdzbopxJqp9zzp7-nbQDXWxa7BYWwuKTvrOmHxSbqhABbNXxr4ouvCWlQEUcepQWINeNyJfehvvQ7iUWdG4bkPAPIfYoO5PZUCKtZ5=w324-h289-no?authuser=0" alt="" />
                    <h3>{event.event}</h3>
                    <h4>{event.date}</h4>
                    <button onClick={()=>deleteEvent(event._id)} className="btn btn-primary">Cancel</button>
                </div>)
            }
        </div>
    );
};

export default User;