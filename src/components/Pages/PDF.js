import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <h3>First Name:{props.val.firstName}</h3>
            <h3>last Name:{props.val.lastName}</h3>

            <h3>User Name:{props.val.userName}</h3>
            <h3>Email:{props.val.email}</h3>
            <h3>Pet Name:{props.val.name}</h3>
            <h3>Pet Type:{props.val.pettype}</h3>

            <h3>Gender:{props.val.gender}</h3>
            <h3>color:{props.val.color}</h3>
            
            <h3>weight(kg):{props.val.weight}</h3>
            <h3>rescueDate:{props.val.rescuedate}</h3>
            <h3>checkupNumber:{props.val.numberofcheckups}</h3>
            <h3>checkupName:{props.val.checkupname}</h3>
            
            <h3> medication:{props.val.medname}</h3>
            <h3>Diagnosis:{props.val.diagnosis}</h3>
            <h3>lastcheckupdate:{props.val.checkupdate}</h3>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;
<PDF 
      
      First Name={this.props.val.firstName}
      last Name={this.props.lastName}
      User Name={this.props.userName} 
      Email={this.props.email}
      />