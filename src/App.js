import React, { useEffect, useState } from 'react'

function App(){

    // const [count, setCount] = useState(0) ; 
    // useEffect(() => console.log("Use Effdect Hook") , [count]) ; 

    // const [user,setUser] = useState("") ;

    // const [data,setData] = useState({
    //   username: "",
    //   password: ""
    // }) ; 
    // const {username,password} = data ;
    // const onChange = (e) => setData({...data, [e.target.name]: e.target.value}) ;

    // const submitHandler = (e) => {
    //   e.preventDefault();
    //   console.log(data) ; 
    // }

    const arr = ["react" , "express" , "node" , "mongodb" , "nextjs"] ; 

    return (
      <div> 
        {/* <center> */}
          {/* <h1> You Cliked {count} times </h1> */}
          {/* <button onClick={() => setCount(count+1)}> Increse </button>  */}
          {/* <input type="text" placeholder="Enter your test here" value={user} onChange={(e)=>setUser(e.target.value)}/> */}
          
          {/* <form onSubmit={submitHandler}>
            <input type="text" name="username" placeholder="ENTER USERNAME" value={username} onChange={onChange}/><br />
            <input type="text" name="password" placeholder="ENTER PASSWORD" value={password} onChange={onChange}/><br />
            <input type="submit" value="Submit"/>
          </form> */}


        {/* </center> */}

        {arr.map((value,index) => <li key={index}>{value}</li>)}
      </div>
    )
}

export default App ; 