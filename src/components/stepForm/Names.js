import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormLabel } from '@material-ui/core';
import * as yup from "yup";
import { useFormik ,Form, Field } from "formik";
///import FormField from "./FormField";

//setting intial values









    




export const Names = ( {formData, setForm, navigation, onSubmit}) => {
    

        const { firstName, lastName, userName, password, confirmPassword,gender } = formData;
       
        const [value, setValue] = React.useState('female');

       

       /* const MyField = (props) => {
            const { values: { firstName, lastName },
                    touched,
                    setFieldValue,
                    } = useFormikContext;
            const [field, meta] = useField(props);
        
            React.useEffect(() => {
                //set the value of username based on first name and last name
        
                if( 
                    firstName.trim() !== '' &&
                    lastName.trim() !== '' &&
                    touched.firstName &&
                    touched.lastName
                ) {
                    setFieldValue(props.name, `firstName: ${firstName}, lastName: ${lastName}`);
                }
            }, [firstName, lastName, touched.firstName, touched.lastName, setFieldValue, props.name]);

            return (
                <> 
                    <input {...props} {...TextField}/>
                    {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
                </>
            )
        };

        const initialValues = { firstName: '',
                                lastName: '',
                                userName: ''};*/
                                
        
        
        /* const nfirstName = formik.getFieldProps("firstName");
        const nlastName = formik.getFieldProps("lastName");
         //email = formik.getFieldProps("email");
         const npassword = formik.getFieldProps("password");
        const nconfirmPassword = formik.getFieldProps("confirmPassword");*/
        
        const validationSchema = yup.object().shape({
            firstName: yup
            .string()
            .required("Please enter your first name")
            .min(2,"First Name must be at least 2 characters"),
            lastName: yup
            .string()
            .required("Please enter your last Name")
            .min(2,"Last Name must be atleast 2 character"),
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
        const formik = useFormik({initialValues: formData,
            validationSchema :validationSchema,
             onClick: values =>{
                 alert(JSON.stringify(values, null, 2));
             }});
       
             
       
             
       
    return (
        
        <Container maxWidth="xs" >
            
            <h3>Personal Details</h3>
           
            <TextField 
             label="First Name"
             name="firstName"
             value={firstName}
             onBlur={formik.handleChange('firstName')}
             onChange={setForm}
            
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            {  formik.errors.firstName  ? (

             <div style={{marginTop:"1rem",color:"red"}}>{formik.errors.firstName}</div>
             )
              : null }
           
            <TextField 
             label="Last Name"
             name="lastName"
             value={lastName}
             onBlur={formik.handleChange('lastName')}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            { formik.errors.lastName ?
             <div style={{marginTop:"1rem",color:"red"}}>{formik.errors.lastName}</div> :null}
            
            <TextField 
             label="User Name"
             name="userName"
             value={userName}
             onBlur={formik.handleChange('userName')}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            {formik.errors.userName ?
             <div style={{marginTop:"1rem",color:"red"}}>{formik.errors.userName}</div> :null}
            <TextField 
             label="Password"
             name="password"
             type="password"
             value={password}
             onBlur={formik.handleChange('password')}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
             required
            
            />
            {formik.errors.password ?
             <div style={{marginTop:"1rem",color:"red"}}>{formik.errors.password}</div> :null}
            <TextField 
             label="Confirm Password"
             name="confirmPassword"
             type="password"
             value={confirmPassword}
             onBlur={formik.handleChange('confirmPassword')}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
             required
            
            />
            {formik.errors.confirmPassword ?
             <div style={{marginTop:"1rem",color:"red"}}>{formik.errors.confirmPassword}</div> :null}
            <FormLabel component="legend" style={{marginTop:"1rem"}}>Gender</FormLabel>
            <RadioGroup row style={{marginTop:"1rem"}}>
                <span>
                <Radio
                value="female"
                label="female"
                
                />Female</span>
                <span>
                    <Radio  
                    label="male"
                    value="male"
                    />Male
                    </span>
                <span>
                    <Radio 
                    label="other"
                    value="other"
                    />Other
                    </span>
                
            </RadioGroup>
            
           
           
            <Button variant="contained" 
            fullWidth color="primary"
            style={{ marginTop: "1rem"}}
            onClick={ ()=>navigation.next()}
           
            //disabled={!(formik.isValid && formik.dirty)}
            
            >
             Next

            </Button>
        </Container>
       

    )

}

export default Names;