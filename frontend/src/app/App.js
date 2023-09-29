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
import NoEmail from './pages/noemail/noemail';
import Store from './pages/store/store';
import MyGameList from './pages/myLibrary/myLibrary'


const App = () => {

    return (
        <Routes>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() } />}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/profile' element={<Profile navigate={ useNavigate() }/>}/>
          <Route path='/home' element={<Home navigate={ useNavigate() }/>}/>
          <Route path='/reset' element={<ResetPassword navigate={ useNavigate() } />}/>
          <Route path='/resetconfirmation' element={<ResetConfirmation navigate={ useNavigate() } />}/>
          <Route path='/resetfailed' element={<ResetFailed navigate={ useNavigate() } />}/>
          <Route path='/noemail' element={<NoEmail navigate={ useNavigate() } />}/>
          <Route path='/store'element={<Store navigate={useNavigate() }/> }/>
          <Route path='/mylibrary' element={<MyGameList navigate={useNavigate() }/> }/>
        </Routes>
    );
}

export default App;
