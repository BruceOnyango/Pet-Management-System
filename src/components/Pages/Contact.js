import React from 'react';
import '../../App.css';
import { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { TextareaAutosize } from '@material-ui/core';

const Contact = () => {
    let history = useHistory();
    Axios.defaults.withCredentials = true;
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");
    const logout = () => {
        Axios.get('http://localhost:3001/logout')
        history.push("/login");
      }
      const sendfeedback = () =>{
        
        
        Axios.post("http://localhost:3001/feedback", {
            email: email,
            message: message
        }).then((response) => {
          console.log(response);

          
        });
    }
 
    return (
        
        <div maxWidth="xl">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="#!">KSPCA</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
               
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item"><Link className="nav-link" to="#/profile">{}</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                      <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/login">Login</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Register">Register</Link></li>
                      
                  </ul>
                  
              </div>
          </div>
      </nav>
        <div className="information-contact">
      <label>Email</label>
      <textarea type="text"
      onChange={(event) => {
        setEmail(event.target.value);
      }} />
      <label>Feedback/challenge</label>
      <textarea maxWidth="xs" type="text"
      onChange={(event) => {
        setMessage(event.target.value);
      }} />
     <button onClick={sendfeedback}>submit</button>
      </div>

      </div>
    )
}

export default Contact
