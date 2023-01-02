import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home"
import About from "./component/pages/About"
import Contact from "./component/pages/Contact"
import Navbar from "./component/layouts/Navbar"
import NotFound from "./component/pages/NotFound"
import AddUser from './component/users/AddUsers';
import EditUser from './component/users/EditUsers';
import ViewUser from './component/users/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='users/add' element={<AddUser/>} />
          <Route path='users/edit/:id' element={<EditUser/>} />
          <Route path='users/:id' element={<ViewUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

