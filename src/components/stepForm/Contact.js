import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import { useFormik ,Form, Field } from "formik";


export const Contact = ({formData, setForm, navigation}) => {
    const { email, phone } = formData;
    const validationSchema = yup.object().shape({
        firstName: yup
        .string()
        .required("Please enter your first name")
        .min(2,"First Name must be at least 2 characters"),
        
        email: yup
        .string()
        .email()
        .required("Email is required")
    })

    const formik = useFormik({initialValues: formData,
        validationSchema :validationSchema,
         onClick: values =>{
             alert(JSON.stringify(values, null, 2));
         }});
    return (
       <Container maxWidth="xs">
           <h3>Contact</h3>
           <TextField 
             label="Phone"
             name="phone"
             value={phone}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />

            <TextField 
             label="E-mail"
             name="email"
             value={email}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            <div style={{marginTop:"1rem"}}>
            <Button color="secondary" 
            variant="contained" 
            style={{marginRight: "1rem",marginTop:"1rem"}}
            onClick={() => navigation.previous()}
            
            >
                Back
                </Button>
            <Button 
            color="primary" 
            variant="contained" 
            style={{marginTop: "0.45rem"}}
            onClick={() =>navigation.next()}
            
            >Next</Button>
            </div>

       </Container>
    )
}

export default Contact;