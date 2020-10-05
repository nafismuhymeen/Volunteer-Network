import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../Logo.png';
import './Admin.css';


const Admin = () => {
    const history = useHistory();
    const voluntClick = ()=>{
        history.push("/adminvolunlist")
    }

    const [addEvent, setAddEvent] = useState({
        event: "",
        photo: "https://lh3.googleusercontent.com/g2D5kWRUzCCZ2WrsEsxSPmn9B3aen2I2kRvD2Ew998yjSroRFjM5EvUrrPY3pMfYVo9KZN-tnog0Zy6zeDv6dZVAmPky7bM1Nk0IU9eMxUeAzK1jDOahTnpcRSZTayzUxlhHZe-NeKAa8UOBHL8WLocn-CPwYviYzsC-ARgptyC7N_wMt1z7jwGMAIHKzXEgCLrgA51wWMHdVRtYwb_sKT57z0gbXYwQzcy9EEYzseohbKrHR3cdLXEFehjBgXXpGaaA9QOwE4T3iDw1h7FLe12X_zj5pLDB1aHt84s79ml1aBDzVGYJZBjfvbIc1kizMr0qRthXb8BywaQkzWJj0sX-DBhyAOEubAHvHN2OQ261sqGfYyIlVY78wX0EroTADKkKqqZGS-UO7cWecCJth3RU_tiI0ulmCU80-S2SyPPnYFu47BdJ8R3QxAXliufV4jDWEK4TPNSG3YXWBKnWYJ2irCZAlmmKXRaaJuA0qZcCxSu3sYcdG2Hurw-m2t0zueKQf5KJ_FDe3-bOcyhtwjroVxYJLfn18qTCGrlZrnoadGAnV8gq-F8boRgJzb-0i8qom-Xab1tSwZHf2r6ODt23OKB-gYlroK68eGUlDGuUVQr-vzC8x_HR-AAz3-_J8Z4DU0Oo2d7ecoGjKfqmgrzk6-eneF7zdOrUAApJtSs0-6-hEsEkW7AXI-3X=w373-h442-no?authuser=0"
    });
    const handleBlur = (e)=>{
        if (e.target.name==="event") {
            let event = {...addEvent};
            event.event = e.target.value;
            setAddEvent(event);
        }
    }
    const handleClick = ()=>{
        const event = { ...addEvent };
        fetch('https://calm-inlet-05004.herokuapp.com/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })
        history.push('/home');
    }
    return (
        <div className="admin">
            <div className="admin__sidepanel">
                <img className="sidepanel__logo" src={logo} alt=""/>
                <i className="fas fa-user-friends group"></i>
                <p onClick={voluntClick}>Volunteer register list</p>
                <i className="fas fa-plus plus"></i>
                <h5>Add event</h5>
            </div>
            <div style={{width:'100%'}} className="admin__property">
            <div style={{backgroundColor:'white'}}><h2>Add Event</h2></div>
            <form action="">
            <div className="property__form">
                <input onBlur={handleBlur} name="event" style={{marginTop:'57.33px', marginLeft:'33px',height: '40px'}} type="text" placeholder='Event Title' required/><input style={{marginTop:'57.33px',marginLeft:'49px',height: '40px'}} type="date" placeholder='Event date' required/><br/>
                <input style={{marginTop:'48.67px',marginLeft:'33px',height: '121px'}} type="text" placeholder='Event Description' required/>
            </div>
            <div className="property__btn" ><button onClick={handleClick} className="btn btn-primary" type="submit">Submit</button></div>
            </form>
            </div>
        </div>
    );
};

export default Admin;