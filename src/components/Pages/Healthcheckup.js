/*import React from 'react'
import '../../App.css';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from "react";

const Healthcheckup = () => {
    const [numberOfCheckups, setnumberOfCheckups] = useState(0);
    const [name, setName] = useState("");
    const [weight, setweight] = useState(0);
    const[petDetails, setpetDetails] = useState([]);
    const [checkupName, setcheckupName] = useState(0);
    const [medicineName, setmedicineName] = useState("");
    const [diagnosis, setdiagnosis] =useState("");
    Axios.defaults.withCredentials = true;


    const adddetails1 = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            weight: weight,
            numberOfCheckups: numberOfCheckups,
            checkupName: checkupName,
            medicineName: medicineName,
            diagnosis: diagnosis
          }).then(() => {
            setpetDetails([...petDetails,  {
                name: name,
                weight: weight,
                numberofcheckups: numberOfCheckups,
                checkupname: checkupName,
                medname: medicineName,
                diagnosis: diagnosis
            }])
          });
         
         
       
      
      }
      const checkDetails = () => {
        Axios.get('http://localhost:3001/checkup', {
          
        }).then((response) => {
          
         setpetDetails(response.data);
        })
      
      }
    return (
        <div>
           <Container maxWidth="xl">
        <div className="information">
    
        <div>
      <label>checkups</label>
      <input type="text"
      onChange={(event) => {
        setnumberOfCheckups(event.target.value);
      }} />
      <label>checkupName</label>
      <input type="text"
      onChange={(event) => {
        setcheckupName(event.target.value);
      }} />
      <label>Medicine Name</label>
      <input type="text"
      onChange={(event) => {
        setmedicineName(event.target.value);
      }} />
      <label>Diagnosis</label>
      <input type="text"
      onChange={(event) => {
        setdiagnosis(event.target.value);
      }} />
      <button onClick={adddetails1}> Submit Details</button>
      ----------------------------------------------------------
      <button onClick={checkDetails}> check Details</button>
      {petDetails.map((val, key) => {
              return <div className="employee">
                <div>
                <h3>Name:{val.name}</h3>
                <h3>checkupNumber:{val.checkupnumber}</h3>
                <h3>checkupName:{val.checkupname}</h3>
                <h3>weight:{val.weight}</h3>
                <h3>medicineName:{val.medname}</h3>
                <h3>diagnosis:{val.diagnosis}</h3>
                </div>
                <div>
                    <input type="text"
                     placeholder="update weight"
                     onChange={(event) => {
                     // setnewWeight(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={() => {//updatepetDetails(val.id)
                    }}
                    >
                      
                      Update</button>
                      
                      <button onClick={()=> {//deletepet(val.id)
                    }}>Delete</button>
                      
                  </div>
                
                </div>
            }
            )
          }
      </div>
      
     
     
      </div>
      -----------------------------
      
      
        </Container>  
        </div>
    )
}

export default Healthcheckup
*/