import React, {useState} from 'react' ;
import {Link, Navigate} from 'react-router-dom' ; 

const Home = () => {
    
    const [auth,setAuth] = useState(false) ;
    if(auth){
        // return <Redirect to="/dashboard" /> ;
        return <Navigate to="/dashboard" /> ; 
    }

    return (
    <div>
        <center> 
            <p>Welcome to Home Page! </p> 
            <button onClick={() => setAuth(true)}>Login</button>
        </center>
        
    </div>
  )
}

export default Home
