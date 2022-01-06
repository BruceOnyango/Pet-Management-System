import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormLabel } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import {BrowserRouter as Router ,Route, Link,useHistory} from 'react-router-dom';

const Register = () => {
  let history = useHistory();
    const schema = yup.object().shape({
        firstName: yup
        .string()
        .required("Please enter your first name")
        .min(2,"First Name must be at least 2 characters"),
        lastName: yup
        .string()
        .required("Please enter your last Name")
        .min(2,"Last Name must be atleast 2 character")
        .when("firstName", {
            is: firstName => (firstName && firstName.length > 0 ? true : false),
            then: yup.string().notOneOf([yup.ref("firstName")], "first and last name should not match") }),
        userName: yup
        .string()
        .required("Please enter your User Name")
        .min(4,"User Name must be atleast 4 characters")
        .max(15,"User Name must not exceed 15 characters")
        .matches( /.\d$/,"User Name must end with a digit"),
        email: yup
        .string()
        .email()
        .required("Email is required"),
        password: yup
        .string()
        .required("Password is required")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
        ),
        confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    
        })

        
    })

    
    const [gender, setgender] = useState("male");
    const [role, setRole] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    const submitForm = (data) =>{
        console.log(data);
        Axios.post("http://localhost:3001/register", {
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          email: data.email,
          password: data.password,
          
          confirmPassword: data.confirmPassword
        }).then((response) => {
          console.log(response.status);

          setRole(response.status);
        });
        
    }
    Axios.defaults.withCredentials = true;
   /* const adduser = (data) => {
      Axios.post("http://localhost:3001/register/user", {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
      }).then((response) => {
        console.log(response);
      });
    }*/
    
    return (
       
           <Container maxWidth="xs">
               <h1>Register</h1>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            type="text"
            name="firstName"
            {...register('firstName')}
            placeholder="First Name..."
          />
          <p style={{color :"red"}}>{errors.firstName?.message}</p>
          <TextField
            type="text"
            name="lastName"
            placeholder="Last Name..."
            {...register('lastName')}
          />
           <p style={{color :"red"}}>{errors.lastName?.message}</p>

           <TextField
            type="text"
            name="userName"
            placeholder="userName..."
            {...register('userName')}
          
          />
          <p style={{color :"red"}}>{errors.userName?.message}</p>
         
          <TextField
            type="text"
            name="email"
            placeholder="Email..."
            {...register('email')}
          />
          <p style={{color :"red"}}>{errors.email?.message}</p>
        
          
         
          <TextField
            type="password"
            name="password"
            placeholder="Password..."
            {...register('password')}
          />
           <p style={{color :"red"}}>{errors.password?.message}</p>
        
          <TextField
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            {...register('confirmPassword')}
          />
          <p style={{color :"red"}}>{errors.confirmPassword && "Passwords Should Match!"}</p>
        
          <Button type="submit" id="submit" >Register</Button>
        </form>
        {
           role == "200" ?
           /*<button onClick={userauth}> check if authenticated</button>*/
           history.push("/Client/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk")
           :

           
           
           null
          
         
          
         
        }
      </div>
           </Container>
        
    )
}

export default Register
//remove gender from requirements 