import React from 'react'
import Container from '@material-ui/core/Container';
import  Accordion  from '@material-ui/core/Accordion';
import  AccordionSummary  from '@material-ui/core/AccordionSummary';
import  AccordionDetails  from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


export const Review = ({ formData, navigation}) => {

    const { go } = navigation;

    const { 
        firstName,
        lastName,
        userName,
        address,
        city,
        country,
        zip,
        phone,
        email,
        password,
        confirmPassword
    } = formData;
    return (
        <Container maxWidth="sm">
            <h3>Review</h3>
            <RenderAccordion 
            go={ go}
            summary="Names"
            details={[
                {'First Name': firstName },
                {'Last Name': lastName },
                {'User Name': userName },
                {'Password' :password},
                {'Confirm Password': confirmPassword}
                
            ]}
             />
             <RenderAccordion 
               go={ go}
            summary="Address"
            details={[
                {'Address': address },
                {'City': city },
                {'Country': country },
                {'Zip': zip}
                
            ]}
             />
             <RenderAccordion 
               go={ go}
            summary="Contact"
            details={[
                {'Phone': phone },
                {'Email': email }
                
                
            ]}
           
             />
             <Button
                color="primary"
                variant="contained"
                style={{ marginTop: "1.5rem"}}
                onClick={() => go('submit')}

             >
                 Submit
             </Button>
        </Container>
    )
}
export const RenderAccordion = ({ summary,details, go }) => (
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        
        >{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                { details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return<ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                }) }
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                >
                    <EditIcon />
                        
                   
                </IconButton>
            </div>
        </AccordionDetails>
    </Accordion>

)
export default Review;

