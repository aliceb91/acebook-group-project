import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import React, { useState } from 'react';
import Feed from '../feed/Feed'
import Profile from '../profile/Profile'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import ResetPassword from '../resetpassword/resetpassword';
import ResetConfirmation from '../resetconfirmation/resetconfirmation';
import ResetFailed from '../resetfailed/resetfailed';


const App = () => {

  const [email, setEmail] = useState("");

    return (
        <Routes>
          <Route path='/posts'  element={<Feed navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } email={email} setEmail={setEmail}/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/profile' element={<Profile navigate={ useNavigate() } email={email}/>}/>
          <Route path='/reset' element={<ResetPassword navigate={ useNavigate() } />}/>
          <Route path='/resetconfirmation' element={<ResetConfirmation navigate={ useNavigate() } />}/>
          <Route path='/resetfailed' element={<ResetFailed navigate={ useNavigate() } />}/>
        </Routes>
    );
}

export default App;
