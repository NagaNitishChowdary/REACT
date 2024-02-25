// APP.js

import React from 'react' ;
import Navbar from './Navbar' ;
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom' ;
import Home from './Home' ;
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App

// Home.js

import React from 'react'

const Home = () => {
  return (
    <div>
        <center> Welcome to Home Page! </center>
    </div>
  )
}

export default Home

// Dashboard.js

import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <center> Welcome to Dashboard ! </center>
    </div>
  )
}

export default Dashboard

// About.js

import React from 'react'

const About = () => {
  return (
    <div>
        <center> Welcome to About Page! </center>
    </div>
  )
}

export default About

// Navbar.js

import React from 'react';
import {Link} from 'react-router-dom' ;

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/dashboard'><li>Dashboard</li></Link>
            <Link to='/about'><li>About</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
