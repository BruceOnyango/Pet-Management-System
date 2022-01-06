import React from 'react'
import '../../App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';

import Axios from 'axios';
import { useEffect, useState } from "react";

const Pets = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [pettype, setpettype] = useState("");
  const [checkupdate, setcheckupdate] = useState("");
  const [newcheckupdate, setnewcheckupdate] = useState("");
  const [newName, setnewName] = useState("");
  const [gender, setgender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState(0);
  const [newWeight, setnewWeight] = useState(0);
  const [rescueDate, setrescueDate] = useState("");
  const [numberOfCheckups, setnumberOfCheckups] = useState(0);
  const [newnumberOfCheckups, setnewnumberOfCheckups] = useState(0);
  const[petDetails, setpetDetails] = useState([]);
  const [checkupName, setcheckupName] = useState("");
  const [newcheckupName, setnewcheckupName] = useState("");
  const [medicineName, setmedicineName] = useState("");
  const [newmedicineName, setnewmedicineName] = useState("");
  const [diagnosis, setdiagnosis] =useState("");
  const [newdiagnosis, setnewdiagnosis] =useState("");

  
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  const addDetails = () => {
    Axios.post('http://localhost:3001/create', {
        name: name,
        lastName: lastName,
        gender: gender,
       
        height: height,
        phoneNumber: phoneNumber,
       
        pettype: pettype,
       // checkupdate: checkupdate,
        rescueDate: rescueDate,
        weight: weight,
        numberOfCheckups: numberOfCheckups,
        checkupName: checkupName,
        medicineName: medicineName,
        checkupdate: checkupdate,
        diagnosis: diagnosis,
      
      }).then(() => {
        setpetDetails([...petDetails,  {
            name: name,
            gender: gender,
            height: height,
            phoneNumber: phoneNumber,
            pettype:pettype,
           // checkupdate: checkupdate,
            rescuedate: rescueDate,
            weight: weight,
            numberofcheckups: numberOfCheckups,
            checkupdate: checkupdate,
            checkupname: checkupName,
            medname: medicineName,
            diagnosis: diagnosis,
            
        }])
      });
     
   
  
  }
  

  const checkDetails = () => {
    Axios.get('http://localhost:3001/petdetails', {
      
    }).then((response) => {
      console.log(response.data)
     setpetDetails(response.data);
    })
  
  }
  const updatepetDetails = (id) => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      weight: newWeight,
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
            id: val.id,
            
            pettype:val.pettype,
          name: val.name,
          color: val.color,
          gender: val.gender,
          rescuedate: val.rescuedate,
          weight: newWeight,
          checkupdate: val.checkupdate,
          numberofcheckups: val.numberofcheckups,
          checkupname: val.checkupname,
          medname: val.medname,
          diagnosis: val.diagnosis
         

        }: val
      }))
    })
  }
  const updatecheckupdate = (id) => {
    Axios.put("http://localhost:3001/updatecheckupdate", {
     checkupdate: newcheckupdate,
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
           checkupdate: newcheckupdate,
           id: val.id,
          name: val.name,
          color: val.color,
          gender: val.gender,
          rescuedate: val.rescuedate,
          weight: val.weight,
          pettype:val.pettype,
          numberofcheckups: val.numberofcheckups,
          checkupname: val.checkupname,
          medname: val.medname,
          diagnosis: val.diagnosis
         

        }: val
      }))
    })
  }
  const updatenumberOfCheckups = (id) => {
    Axios.put("http://localhost:3001/updatenumberOfCheckups", {
      numberofcheckups: newnumberOfCheckups,
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
           numberofcheckups: newnumberOfCheckups,
           id: val.id,
          name: val.name,
          color: val.color,
          gender: val.gender,
          rescuedate: val.rescuedate,
          weight: val.weight,
          checkupdate: val.checkupdate,
          pettype:val.pettype,
          checkupname: val.checkupname,
          medname: val.medname,
          diagnosis: val.diagnosis

        }: val
      }))
    })
  }
  const updatecheckupname = (id) => {
    Axios.put("http://localhost:3001/updatecheckupname", {
      checkupname: newcheckupName,
      
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
            checkupname: newcheckupName,
            id: val.id,
          name: val.name,
          color: val.color,
          gender: val.gender,
          rescuedate: val.rescuedate,
          pettype:val.pettype,
          weight: val.weight,
          checkupdate: val.checkupdate,
          numberofcheckups: val.numberofcheckups,
          
          medname: val.medname,
          diagnosis: val.diagnosis
         

        }: val
      }))
    })
  }
  const updatemedication = (id) => {
    Axios.put("http://localhost:3001/updatemedication", {
      medname: newmedicineName,
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
           
            medname: newmedicineName,
            id: val.id,
          name: val.name,
          color: val.color,
          gender: val.gender,
          pettype:val.pettype,
          rescuedate: val.rescuedate,
          weight: val.weight,
          checkupdate: val.checkupdate,
          numberofcheckups: val.numberofcheckups,
          checkupname: val.checkupname,
         
          diagnosis: val.diagnosis
         

        }: val
      }))
    })
  }
  const updatediagnosis = (id) => {
    Axios.put("http://localhost:3001/updatediagnosis", {
      diagnosis: newdiagnosis,
      
      id: id
    }).then((response) => {
      setpetDetails(petDetails.map((val) => {
          console.log(val);
        return val.id == id? {
            diagnosis: newdiagnosis,
            id: val.id,
          name: val.name,
          color: val.color,
          gender: val.gender,
          rescuedate: val.rescuedate,
          weight: val.weight,
          checkupdate: val.checkupdate,
          pettype:val.pettype,
          numberofcheckups: val.numberofcheckups,
          checkupname: val.checkupname,
          medname: val.medname,
        
         

        }: val
      }))
    })
  }
  const deletepet = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
        setpetDetails(petDetails.filter((val)=>{
          return val.id != id
        }))
    })
  }
  let history = useHistory();
  const logout = () => {
    history.push("/login");
  }

    return (
      
        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark "style={{"margin-top":"-70px"
                                                                              ,"position":"fixed"
                                                                              ,"width":"1400px"
                                                                              }}>
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
        <Container maxWidth="xl">
        <div className="information">
      <label> First Name</label>
      <input type="text"
      onChange={(event) => {
        setName(event.target.value);
      }} />
      <label>Last Name</label>
      <input type="text"
      onChange={(event) => {
        setLastName(event.target.value);
      }} />
      <label>gender</label>
      <input type="text"
      onChange={(event) => {
        setgender(event.target.value);
      }} />
      <label>Phone Number</label>
      <input type="Number" 
      onChange={(event) => {
        setPhoneNumber(event.target.value);
      }}/>
       <label>Height</label>
      <input type="Number" 
      onChange={(event) => {
        setHeight(event.target.value);
      }}/>
      <label>weight(kg)</label>
      <input type="number"
      onChange={(event) => {
        setweight(event.target.value);
      }} />
     
      <label>DOB</label>
      <input type="date"
    //  placeholder="yy-mm-dd"
      onChange={(event) => {
        setrescueDate(event.target.value);
      }} />
     
      </div>
     
      <div className="information1">
     
      <label>checkupName</label>
      <input type="text"
      onChange={(event) => {
        setcheckupName(event.target.value);
      }} />
       <label>checkupnumber</label>
      <input type="number"
      onChange={(event) => {
        setnumberOfCheckups(event.target.value);
      }} />
       <label>checkup date</label>
      <input type="date"
      onChange={(event) => {
        setcheckupdate(event.target.value);
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
     <br />
     <br />
     <br />
     <br />
     
     </div>
    
     
      <button onClick={addDetails} className="pets-submit"> Submit Details</button>
      <br/>
            <button onClick={checkDetails} className="pets-update"> Update Details</button>
      {petDetails.map((val, key) => {
              return <div className="employee">
                <div>
                <h3>Pet Name:{val.name}</h3>
                <h3>Pet Type:{val.pettype}</h3>

                <h3>Gender:{val.gender}</h3>
                <h3>color:{val.color}</h3>
                
                <h3>weight(kg):{val.weight}</h3>
                <h3>rescueDate:{val.rescuedate}</h3>
                <h3>checkupNumber:{val.numberofcheckups}</h3>
                <h3>checkupName:{val.checkupname}</h3>
                
                <h3> medication:{val.medname}</h3>
                <h3>Diagnosis:{val.diagnosis}</h3>
                <h3>lastcheckupdate:{val.checkupdate}</h3>
                </div>
                <div>
                    <input type="text"
                     placeholder="update weight"
                     onChange={(event) => {
                      setnewWeight(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatepetDetails(val.id) }}
                    
                    
                    >
                        
                      
                        update weight</button>

                      <input type="text"
                     placeholder="update checkup number"
                     onChange={(event) => {
                      setnewnumberOfCheckups(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatenumberOfCheckups(val.id)  }}
                    
                    
                    >
                        update checkup number</button>
                      <input type="text"
                     placeholder="update checkupname"
                     onChange={(event) => {
                      setnewcheckupName(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatecheckupname(val.id)  }}
                    
                    
                    >
                        update checkupname</button>
                      <input type="text"
                     placeholder="update medication"
                     onChange={(event) => {
                      setnewmedicineName(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatemedication(val.id)  }}
                    
                    >
                        update medication</button>
                      <input type="text"
                     placeholder="update diagnosis"
                     onChange={(event) => {
                      setnewdiagnosis(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatediagnosis(val.id)  }}
                    
                    
                    >
                        
                      
                        update diagnosis</button>
                      <input type="date"
                     placeholder=" checkupdate"
                     onChange={(event) => {
                      setnewcheckupdate(event.target.value);
                    }}
                     />
                     
                    <button
                    onClick={(id) => {updatecheckupdate(val.id)  }}
                    
                    
                    >
                        set checkupdate</button>
                      <button onClick={()=> {deletepet(val.id)  }}>Delete</button>
                      
                  </div>
                
                </div>
            }
            )
          }
      
      
        </Container>
      
      
      </div>


    )
}

export default Pets;
