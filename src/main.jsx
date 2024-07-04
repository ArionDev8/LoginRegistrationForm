import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Users from './components/Users.jsx'
import Profile from './components/Profile.jsx'
import PasswordReset from './components/PasswordReset.jsx'
import './index.css'
import './i18n.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Register/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/users' element = {<Users/>} />
        <Route path='/profile/:email' element = {<Profile/>} />
        <Route path='/passwordReset' element = {<PasswordReset />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
