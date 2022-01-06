import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {BrowserRouter as Router ,Route, Link, useHistory} from 'react-router-dom';
import Footer from './Footer';
import { CFooter } from '@coreui/react';
import { CLink } from '@coreui/react';


const Main = () => {
    let history = useHistory();
    const register = () => {
        history.push("/register")
    }
    const login = () => {
        history.push("/login")
    }
    return (
        <div  className="py-5 bg-image-full" style= {{ "background-image": `url('')` }} >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{"margin-top":"-50px"
                                                                                ,"position":"fixed"
                                                                                ,"width":"1400px"}}>
            <div className="container">
                <Link className="navbar-brand" to="#!">KSPCA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Register">Register</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <h1 style={{"margin-left":"260px","font-size":"100px"}}></h1>
        <header className="py-5 bg-image-full"  >
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG_Hoh_MxfClTw96b7wNpinW02zRlcCPHLg&usqp=CAU" style={{"width":"650px","margin-left":"-700px","margin-top":"-100px"}} alt="..." />
                <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
                <p className="text-white-50 mb-0">Landing Page Template</p>
            </div>
        </header>
        <div style={{"margin-left":"800px","margin-top":"-600px"}}>
        <h3>Register with us below</h3>
        <br />
        <button onClick={register}>Register</button>
        <br />
        <h3>Already have an account? </h3>
        <button onClick={login}>Login</button>
        </div>
    
       
        </div>
    )
}

export default Main
