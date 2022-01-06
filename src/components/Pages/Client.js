import React from 'react';
import '../../App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';
import { Table } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import { FaSistrix } from "react-icons/fa";
import Axios from 'axios';
import { useEffect, useState } from "react";
import axios from 'axios';


const Client = () => {
  let history = useHistory();
    const [petDetails,setpetDetails] = useState([]); 
    const [petHistory, setpetHistory] = useState([]);
    const [petName, setpetName] = useState();
    const [show, setShow] = useState(false);

    Axios.defaults.withCredentials = true;
    const checkDetails = () => {
      setShow(!show);
        Axios.get('http://localhost:3001/petdetails', {
          
        }).then((response) => {
          console.log(response.data)
         setpetDetails(response.data);
        })
    }
    const getpet = () => {
      setShow(!show);
        Axios.get('http://localhost:3001/petdetails', {
          
        }).then((response) => {
          console.log(response.data)
         setpetDetails(response.data);
        })
    }
    const checkpethistory = () => {
      setShow(!show);
      Axios.get('http://localhost:3001/pethistory', {
        
      }).then((response) => {
        console.log(response.data)
       setpetHistory(response.data);
      })
  }
   const logout = () => {
     axios.get('http://localhost:3001/logout')
     history.push("/login");
   }
   const feedback = () => {
   
    history.push("/contact");
  }
    return (
        <div className="clientpage" 
       
        >
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <div className="container">
              <Link className="navbar-brand" to="#!">KSPCA</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
               
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item"><Link className="nav-link" to="#/profile">{}</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                      <li className="nav-item"><Link className="nav-link" onClick={logout}>Logout</Link></li>
                  </ul>
                  
              </div>
          </div>
      </nav>
          
            
          
            
                   
             <div className="navbar-admin">
             <h1>Welcome! 
                </h1>
             <h3></h3>
                          <button className="nav-button " onClick={checkpethistory}> Pet history</button>
                          <button className="nav-button " onClick={checkDetails}> Pet current Details</button>
                          <button className="nav-button " onClick={feedback}> Feedback</button>
                         
                          </div>
                          
        
         {petHistory.map((val, key) => { 
          
              return <div >
               
                <div className="admin-values">
                   
                 
                  <Table striped bordered hover variant="dark" className="clienttable">
                  <thead>
                    Pet history
    <tr>
      <th>Pet Name</th>
      <th>Gender</th>
      <th>color</th>
      <th>weight(kg)</th>
      <th>rescueDate</th>
      <th>Medication</th>
      <th>Diagnosis</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
                
                <td><h3>{val.name}</h3></td> 

                <td><h3>{val.gender}</h3></td>
                <td><h3>{val.color}</h3></td>
                
                <td><h3>{val.weight}</h3></td>
                <td><h3>{val.rescuedate}</h3></td>
                <td><h3> {val.medname}</h3></td>
                <td><h3>{val.diagnosis}</h3></td>
                
                </tr>
                  </tbody>
                  </Table>
                
                </div>
                <div>
                   
                 
                  </div>
         
                </div>
                
            }
            )
          }
          
         
           
           {petDetails.map((val, key) => {
              return <div >
              
                <div className="admin-values">
                 
                <Table striped bordered hover variant="dark" className="clienttable">
                  <thead>
                   
                      latest details
                    
    <tr>
      
      <th>Pet Name</th>
     
      <th>weight(kg)</th>
      
      <th>Medication</th>
      <th>Diagnosis</th>
      <th>checkup number</th>
      <th>checkup Name</th>
      <th>last check up</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
                
                <td><h3>{val.name}</h3></td> 

               
                
                <td><h3>{val.weight}</h3></td>
               
                <td><h3> {val.medname}</h3></td>
                <td><h3>{val.diagnosis}</h3></td>
                <td><h3>{val.numberofcheckups}</h3></td>
               <td> <h3>{val.checkupname}</h3></td>
                
               
                
                <td><h3>{val.checkupdate}</h3></td>
                
                </tr>
                  </tbody>
                  </Table>
                  
                </div>
                <div>
                   
                     
                  </div>
                
                </div>
            }
            )
          }

          
          </div>
         
    )
}

export default Client;
