import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
    firstName: Yup
    .string()
    .required("Please enter your first name")
    .min(2,"First Name must be at least 2 characters"),
    lastName: Yup
    .string()
    .required("Please enter your last Name")
    .min(2,"Last Name must be atleast 2 character"),
    userName: Yup
    .string()
    .required("Please enter your User Name")
    .min(4,"User Name must be atleast 4 characters")
    .max(15,"User Name must not exceed 15 characters")
    .matches( /.\d$/,"User Name must end with a digit"),
    email: Yup
    .string()
    .email()
    .required("Email is required"),
    password: Yup
    .string()
    .required("Password is required")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Minimum eight characters, at least one letter and one number"
    ),
    confirmPassword: Yup
    .string()
    .required("Please confirm your password")
    .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")

    })


})
 
 export const validation = () => (

   <div>
     
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched,onSubmit }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
          
         </Form>
       )}
     </Formik>
   </div>
 );
  
  export default validation;


