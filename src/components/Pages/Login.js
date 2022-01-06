import React from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import Axios from 'axios';
import { useEffect, useState } from "react";

import {BrowserRouter as Router ,Route, Link,useHistory} from 'react-router-dom';


const schema = yup.object().shape({
    userName: yup
        .string()
        .required("Please enter your User Name")
        .min(4,"User Name must be atleast 4 characters")
        .max(15,"User Name must not exceed 15 characters")
        .matches( /.\d$/,"User Name must end with a digit"),
        password: yup
        .string()
        .required("Password is required")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
        ),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loginStatus, setLoginStatus] = useState();
  const [token, setToken] = useState();
  const [role, setRole] = useState("");
  const [loginName, setLoginName] = useState("");
  Axios.defaults.withCredentials = true;
  let history = useHistory();

  const submitForm = (data,e) => {
    //console.log(data);
    
    
  
    Axios.post("http://localhost:3001/login", {
      username: data.userName,
      password: data.password,
    }).then((response) => {
        //setLoginStatus(response.data.message)
        console.log(response);
      if(!response.data.auth) {
           
        setLoginStatus(response.data.message)
        
        console.log(loginStatus);
      
      } else {
       
        console.log(response.data.auth);
        localStorage.setItem("token",  response.data.token)
        //console.log(response.data);
        console.log(response.data.token);
        setToken(response.data.token);
       // const name = response.data[0].userName;
       e.preventDefault();
       setLoginStatus(response.data.auth)
       
      }
      
    });
  };
  const handlehistory = () =>{
    history.push("/Register");
}

  
  
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
         //setLoginStatus(response.data.auth);
        setRole(response.data.user[0].role)
        setLoginName(response.data.user[0].userName);
        //console.log(response.data.auth);

        
          if(response.data.user[0].role == "user") {
            history.push("/client/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
          }
         

           else if(response.data.user[0].role == "admin") {
            history.push("/admin/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           }
         

           else  {
          history.push("/Pets/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           }
          
         
         
        
         
        
       
      } 
      
    })
  }, []);

  const userauth = () => {
    Axios.get("http://localhost:3001/auth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      /*if response.data.auth == true{
       // history.push("/login")
      //} else {
        console.log(response);
        setloginStatus(false)
      }*/
      console.log(response);
    });
  }



  return (
    <Container maxWidth="xs">
      
      <h1>login</h1>
      
      <div className="inputs" >
      
        <form onSubmit={handleSubmit(submitForm)} >
         
          
         <TextField
            type="text"
            name="userName"
            placeholder="userName..."
            {...register('userName')} 
          
          />
          <p>{errors.userName?.message}</p>
        
         
          <TextField
            type="password"
            name="password"
            placeholder="Password..."
            {...register('password')}
          />
           <p>{errors.password?.message}</p>
          
          
        
          <Button type="submit" id="submit" >login</Button>
        </form>
     {loginStatus}
         {
           loginStatus ==true && role == "user" ?
           /*<button onClick={userauth}> check if authenticated</button>*/
           history.push("/client/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           :

           loginStatus ==true && role == "admin" ?
           history.push("/admin/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           :

           loginStatus ==true && role == "staff" ?
           history.push("/Pets/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           :
           
           null
          
         
          
         
        }
      </div>
     
      
   </Container>
  );
}

export default Login;