import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate() ; 

    return (
    <div>
        <center> 
            <p>Welcome to Home Page! </p> 
            <button onClick={() => navigate('/dashboard')}>Login</button>
        </center>
        
    </div>
  )
}

export default Home
