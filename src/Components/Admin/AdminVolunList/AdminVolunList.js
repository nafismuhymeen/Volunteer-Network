import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../Logo.png';
import './AdminVolunList.css';
const AdminVolunList = () => {
    const history = useHistory();
    const addClick = () => {
        history.push("/admin")
    }

    const [allVolunts, setAllVolunts] = useState([]);
    useEffect(() => {
        fetch(`https://calm-inlet-05004.herokuapp.com/allvolunts`)
            .then(res => res.json())
            .then(data => setAllVolunts(data))
    }, [])

    const deleteEvent = (id)=>{
        fetch(`https://calm-inlet-05004.herokuapp.com/deleteevent/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }

    return (
        <div className="admin">
            <div className="admin__sidepanel">
                <img className="sidepanel__logo" src={logo} alt="" />
                <i className="fas fa-user-friends group"></i>
                <p>Volunteer register list</p>
                <i className="fas fa-plus plus"></i>
                <h5 onClick={addClick}>Add event</h5>
            </div>
            <div style={{ width: '100%' }} className="admin__property">
                <div style={{ backgroundColor: 'white' }}><h2>Volunteer Register List</h2></div>
                <div style={{ marginTop:"50px"}}>
                    {
                        allVolunts.map(volunteer => <div className="volunt-list">
                            <p>{volunteer.name}</p>
                            <p>{volunteer.email}</p>
                            <p>{volunteer.date}</p>
                            <p>{volunteer.event}</p>
                            <div  style={{ marginLeft:"auto",marginRight:"3px", marginTop:"auto", marginBottom:"auto" }}><button onClick={()=>deleteEvent(volunteer._id)} className="btn btn-danger">Delete</button></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminVolunList;