import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import MultiStepForm from './MultiStepForm';

export const Login = (step, navigation) => {

    const [values, setValues] = React.useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {
        setValues({

            

            [e.target.name] : e.target.value},
            {[e.target.name]: e.target.value}
            )
    }
    const validationSchema = yup.object().shape({
        
        email: yup
        .string()
        .email()
        .required("Email is required"),
        password: yup
        .string()
        .required("Password is required")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
        )
    
        })
        
    
    return (
       
             <Container maxWidth="xs" >
                 <h3>Login</h3>
            <TextField 
             label="E-mail"
             name="email"
             value={values.email}
             onChange={handleChange}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />

           <TextField 
             label="Password"
             name="password"
             type="password"
             value={values.password}
            
             onChange={handleChange}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
             required
            
            />

           <Button variant="contained" 
            fullWidth color="primary"
            style={{ marginTop: "1rem"}}
            onClick={ ()=>navigation.step(6)}
           
            //disabled={!(formik.isValid && formik.dirty)}
            
            >
             Login

            </Button>
             </Container>
        
    )
}

export default Login;
