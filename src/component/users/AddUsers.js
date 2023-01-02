import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        image: ""
    });
    const { name, username, email, phone, website, image } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3002/users", user);
        navigate("/");
    }
    return (
        <div className="container mt-5 mt-2 col-6 border shadow">
            <h2 className="text-center mt-5 mb-0">Add a User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group mt-3 mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter original Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter hero name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter email address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter website name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter image url"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="text-center mb-3">
                    <button className="btn btn-primary btn-block col-3">Add Avenger</button>
                </div>
            </form>
        </div>
    )
};


export default AddUser;