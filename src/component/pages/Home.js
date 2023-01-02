import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink  } from 'react-router-dom';    

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadusers();
    }, []);

    const loadusers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadusers();
    }

    return (
        <div className="container col-10 mt-5">
            <div className="py-4">
                <table class="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <a class="btn btn-primary m-2"href={`/users/${user.id}`} >View</a>
                                        <a className="btn btn-outline-primary m-2" href={`/users/edit/${user.id}`}>Edit</a>
                                        <a className="btn btn-danger m-2" onClick={() => deleteUser(user.id)}>Delete</a>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Home;