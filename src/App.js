import logo from './logo.svg';
import './App.css';
import MultiStepForm from './components/MultiStepForm';
import UserForm from './components/UserForm';
import FormUserDetails from './components/FormUserDetails';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Main from './components/Pages/Main';
import Validation from './components/Pages/validation';
import Validation1 from './components/Pages/validation1';
import Pets from './components/Pages/Pets';
import Healthcheckup from './components/Pages/Healthcheckup';
import Client from './components/Pages/Client';
import Admin from './components/Pages/Admin';
import StaffRegister from './components/Pages/StaffRegister';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';

//add multistep form
function App({loginStatus, token}) {
  return (
    <Router >
      <Route 
      exact={true}
      path="/validation1"
      component={props => (<Validation1 {...props}/>)}
      />
       <Route 
      exact={true}
      path="/StaffRegister/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk"
      component={props => (<StaffRegister {...props}/>)}
      />
       <Route 
      exact={true}
      path="/admin/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk"
      component={props => (<Admin {...props}/>)}
      />
       <Route 
      exact={true}
      path="/client/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsImlhdCI6MTYzMjI2MTAyMiwiZXhwIjoxNjMyMjYxMzIyfQ.stco1eYYEtIqgBAtxvTKUTmu4WJ0W_F_efTWUOVwOEk"
      component={props => (<Client {...props}/>)}
      />
      
      <Route 
      exact={true}
      path="/Pets"
      component={props => (<Pets {...props}/>)}
      />
      <Route 
      exact={true}
      path="/About"
      component={props => (<About {...props}/>)}
      />
      <Route 
      exact={true}
      path="/Healthcheckup"
      component={props => (<Healthcheckup {...props}/>)}
      />
       <Route 
      exact={true}
      path="/contact"
      component={props => (<Contact {...props}/>)}
      />
      <Route 
      exact={true}
      path="/"
      component={props => (<Main {...props}/>)}
      />
      <Route 
      exact={true}
      path="/validation"
      component={props => (<Validation {...props}/>)}
      />
      <Route 
      exact={true}
      path="/Register"
      component={props => (<Register {...props}/>)}
      />
      <Route 
      exact={true}
      path="/Login"
      component={props => (<Login {...props}/>)}
      />
    </Router>
  );
}

export default App;


