import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import { useState } from 'react';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        city: '',
        gender: ''
    }

    // proceed to next step
     nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go to previous step 
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // handlefields change
    
   handleChange = e => {
    
        this.setState({ [e.target.name]: e.target.value });
    };
   
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, contact, password, city, gender} = this.state;
        const values = { firstName, lastName, email, contact, password, city, gender}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                       
                        />
                )
            case 2: 
                    return (
                        <h1>FormPersonalDetails</h1>
                    )
            case 3:
                    return (
                        <h1>Confirm</h1>
                    )
            case 4: 
                    return (
                        <h1>Success</h1>
                    )
        }


       
    }
    
}
 

export default UserForm
