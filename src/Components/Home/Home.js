import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://calm-inlet-05004.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    shuffle(events);
    // Register For Events
    let history = useHistory();
    const handleClick = (work) => {
        history.push(`/register/${work}`)
    }

    let symbols = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    return (
        <div className="home">
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="home__search">
                <input type="text" className="search__input" placeholder="Search...." />
                <div>
                    <button className="btn btn-primary" type="button" >Search</button>
                </div>
            </div>
            <div className="home__events row">
                {
                    events.map(event => <div onClick={() => handleClick(event.event)} className="col-lg-3 events__card">
                        <img src={event.photo} alt="" />
                        <div style={{ backgroundColor: `${color}` }} className="colorBox"><h2>{event.event}</h2></div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;