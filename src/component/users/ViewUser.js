import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from 'react-router-dom';

const ViewUser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        image: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    }

    return (
        <div className="container col-10 mt-5">
            <Link to="/" className="btn btn-primary mt-3 mb-3"> back </Link>
            <h1 className="diaplay-1  col-3 text-center mb-4">User Id : {user.id}</h1>
            <div className="row">
                <ul className='list-group w-50'>
                    <li className='list-group-item mb-2 shadow'><b>Name :</b> {user.name}</li>
                    <li className='list-group-item mb-2 shadow'><b>Username :</b>  {user.username}</li>
                    <li className='list-group-item mb-2 shadow'><b>Email :</b> {user.email}</li>
                    <li className='list-group-item mb-2 shadow'><b>Phone No :</b>  {user.phone}</li>
                    <li className='list-group-item shadow'><b>Website :</b> {user.website}</li>
                </ul>
                <div className="face col-3">
                    <img height={300} src={user.image} alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default ViewUser;