import { initial } from 'lodash'
import React from 'react'
import { useForm, useStep } from 'react-hooks-helper';
import Names from './stepForm/Names';
import Address from './stepForm/Address';
import Review from './stepForm/Review';
import Contact from './stepForm/Contact';
import Submit from './stepForm/Submit';

const defaultData = {
    firstName: '',
        lastName: '',
        userName: '',
        address: '',
        city: '',
        country:'',
        zip: '',
        phone: '',
        email: '',
        gender: '',
        password: '',
        confirmPassword: '',
        

}

const steps = [
   { id: 'names'},
  
   { id: 'address'},
   
   { id: 'contact'},
   { id: 'review'},
   { id: 'submit'}
];
    

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step , navigation } = useStep({
        steps,
        initialStep : 0 ,

});

const props = { formData, setForm, navigation }


    switch(step.id){
        case "names":
            return <Names {...props}/>;
        case "address":
            return < Address {...props}/>
        case "contact":
          return < Contact {...props}/>
       
        case "review":
            return < Review {...props}/>
       
        case "submit":
            return < Submit {...props}/>
                
        
    }
    
    return (
        <div>
            <h1>MultiStepForm</h1>
        </div>
    )
}

export default MultiStepForm
