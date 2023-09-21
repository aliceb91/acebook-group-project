import './App.css';
import LoginForm from './pages/login/LoginForm'
import SignUpForm from './pages/signup/SignUpForm'
import React, { useState } from 'react';
import Profile from './pages/profile/Profile'
import Home from './pages/home/home'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import ResetPassword from './pages/resetpassword/resetpassword';
import ResetConfirmation from './pages/resetconfirmation/resetconfirmation';
import ResetFailed from './pages/resetfailed/resetfailed';


const App = () => {

  const [email, setEmail] = useState("");

    return (
        <Routes>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } email={email} setEmail={setEmail}/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/profile' element={<Profile navigate={ useNavigate() } email={email}/>}/>
          <Route path='/home' element={<Home navigate={ useNavigate() }/>}/>
          <Route path='/reset' element={<ResetPassword navigate={ useNavigate() } />}/>
          <Route path='/resetconfirmation' element={<ResetConfirmation navigate={ useNavigate() } />}/>
          <Route path='/resetfailed' element={<ResetFailed navigate={ useNavigate() } />}/>
        </Routes>
    );
}

export default App;
