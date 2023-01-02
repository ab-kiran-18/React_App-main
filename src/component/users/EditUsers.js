import React, { useState ,useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website, image } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data)
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, user);
        navigate("/");
    }
    
    return (
        <div className="container mt-5 col-8 border shadow">
            <h2 className="text-center mt-3 mb-0">Edit User ({name})</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group mt-2 mb-2">
                    <span> Name : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-2">
                <span> UserName : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your UserName"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-2">
                <span> email : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your email address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-2">
                <span> PH No : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-2">
                <span> website name : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter your website name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group mb-2">
                <span> image url : </span>
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="enter image url"
                        name="image"
                        value={image}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="text-center mb-3">
                    <button className="btn btn-primary btn-block col-3">Update Avenger</button>
                </div>
            </form>
        </div>
    )
};


export default EditUser