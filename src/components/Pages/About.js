import React from 'react';
import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';

const About = () => {
    return (
        <div  className="py-5 bg-image-full" style= {{ "background-image": `url('https://images.pexels.com/photos/4672711/pexels-photo-4672711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
        "height":"650px"
        ,"width":"1400px"
        ,"background-repeat":"no-repeat"  }} >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"margin-top":"-50px"
                                                                              ,"position":"fixed"
                                                                              ,"width":"1400px"
                                                                              }}>
          <div className="container">
              <Link className="navbar-brand" to="#!">KSPCA</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/login">Login</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Register">Register</Link></li>
                      
                      <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
      <p style={{"margin-left":"520px","font-size":"60px"}}>KSPCA is an animal shelter that rescues pets from harmful 
      environments and takes care of them.</p>
      
      
  
      
      </div>
    )
}

export default About
