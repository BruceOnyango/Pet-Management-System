import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Address = ( {setForm, formData, navigation}) => {
 const { address, city, country, zip } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Address</h3>
            <TextField 
             label="Address"
             name="address"
             value={address}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
             <TextField 
             label="City"
             name="city"
             value={city}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            <TextField 
             label="Country"
             name="country"
             value={country}
             onChange={setForm}
             margin="normal"
             variant="outlined"
             autoComplete="off"
             fullWidth
            
            />
            <TextField 
             label="Zip"
             name="zip"
             type="number"
             value={zip}
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
export default Address;