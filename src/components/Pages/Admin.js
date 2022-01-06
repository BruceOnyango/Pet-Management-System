import React from 'react';
import '../../App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';
import Printer, { print } from 'react-pdf-print';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { useEffect, useState } from "react";
import axios from 'axios';
import { jsPDF } from "jspdf"; 


const Admin = () => {
  
    let history = useHistory();
    const [petDetails,setpetDetails] = useState([]);
    const [userDetails, setuserDetails] =useState([]);
    const [feedback, setFeedback] = useState([]);
    Axios.defaults.withCredentials = true;
    const checkDetails = () => {
        Axios.get('http://localhost:3001/petdetails', {
          
        }).then((response) => {
          console.log(response.data)
         setpetDetails(response.data);
        })
    }
    const getfeedback = () => {
      Axios.get('http://localhost:3001/feedback', {
        
      }).then((response) => {
        console.log(response.data)
       setFeedback(response.data);
      })
  }

    const getUsers = () => {
        Axios.get("http://localhost:3001/getusers", {

        }).then((response) => {
            console.log(response.data)
            setuserDetails(response.data);
           
        })

       
    }
    const deleteuser = (id) => {
      Axios.delete(`http://localhost:3001/deleteuser/${id}`).then((response) =>{
                setuserDetails(userDetails.filter((val)=>{
                  return val.id != id
                }))
            })
          }
    const handlehistory = () =>{
        history.push("/StaffRegister/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk");
    }
    const petspage = () =>{
      history.push("/Pets/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk");
  }
  const logout = () => {
    
    history.push("/login");
  }

   
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="#!">KSPCA</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item"><Link className="nav-link" to="#/profile">{}</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                      <li className="nav-item"><Link className="nav-link"  onClick={logout}>Logout</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
        <div className="navbar-admin">
        <button className="nav-button" onClick={checkDetails}> Pet Details</button>
        <button  className="nav-button" onClick={getUsers}> User Details</button>
        <button  className="nav-button" onClick={handlehistory}> Register staff</button>
        <button  className="nav-button" onClick={petspage}> Update pet details</button>
        <button  className="nav-button" onClick={getfeedback}> Feedback</button>
        </div>
       
        {feedback.map((val, key) =>{
            return <div className="admin-values-userdetail">
            <div>
            <Table striped bordered hover variant="dark" className="clienttable-userdetail">
                  <thead>
    <tr>
      
     
      <th>Email</th>
      <th>Feedback</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
                
            

            
            <td><h3>{val.email}</h3></td>
            <td><h3>{val.message}</h3></td>
                
                </tr>
                  </tbody>
                  </Table>
            
          
            </div>
            <div>
               
             <button onClick={()=> {deleteuser(val.id) }}>Delete</button>
              </div>
            
            </div>
        })}
        {userDetails.map((val, key) =>{
            return <div className="admin-values-userdetail">
            <div>
            <Table striped bordered hover variant="dark" className="clienttable-userdetail">
                  <thead>
    <tr>
      <th>First Name</th>
      <th>last Name</th>
      <th>User Name</th>
      <th>Email</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
                
            <td><h3>{val.firstName}</h3></td>
            <td><h3>{val.lastName}</h3></td>

            <td><h3>{val.userName}</h3></td>
            <td><h3>{val.email}</h3></td>
                
                </tr>
                  </tbody>
                  </Table>
            
          
            </div>
            <div>
               
             <button onClick={()=> {deleteuser(val.id) }}>Delete</button>
              </div>
            
            </div>
        })}
     {petDetails.map((val, key) => {
          return <div className="admin-values">
            <div>
            <Table striped bordered hover variant="dark" className="clienttable">
                  <thead>
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

export default Admin
