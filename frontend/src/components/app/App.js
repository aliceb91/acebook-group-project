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

const App = () => {

  const [email, setEmail] = useState("");

    return (
        <Routes>
          <Route path='/posts'  element={<Feed navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } email={email} setEmail={setEmail}/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/profile' element={<Profile navigate={ useNavigate() } email={email}/>}/>
        </Routes>
    );
}

export default App;
