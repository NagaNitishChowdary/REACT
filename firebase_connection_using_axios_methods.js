import React,{useState,useEffect} from 'react'
import axios from 'axios' ;

function App() {

  const [data,setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {username, email , password , confirmPassword} = data ; 

  const changeHandler = (e) => {setData({...data , [e.target.name] : e.target.value})} ;

  const SubmitHandler = (e) => {
    e.preventDefault() ; 
    axios.post('https://formsubmission-b856b-default-rtdb.firebaseio.com/knnc.json',data).then(
      () => {alert("Form submitted successfully")}
    ) ; 
  } ;

  const [knnc,setKnnc] = useState("") ;

  useEffect(() => {
    axios.get('https://formsubmission-b856b-default-rtdb.firebaseio.com/register.json').then(
    (res) => {setKnnc(res.data)}) ;
    console.log(knnc) ; 
  },[]) ;
  

  return (
    <div>
      <center>
        <form onSubmit={SubmitHandler}>
          <input type="text" name="username" value={username} placeholder="username" onChange={changeHandler}/>< br/> 
          <input type="email" name="email" value={email} placeholder="email" onChange={changeHandler}/><br />
          <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler}/>< br/>
          <input type="password" name="confirmPassword" value={confirmPassword} placeholder="confirmPassword" onChange={changeHandler}/>< br/> 
          {password !== confirmPassword ? <p style={{color:"red"}}>passwords does not match</p> : null}
          <input type="submit" value="submit" />
        </form>
      </center>
    </div>
  )
}

export default App
