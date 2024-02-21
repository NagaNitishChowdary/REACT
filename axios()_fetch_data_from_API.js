import React,{useEffect,useState} from 'react'
import axios from 'axios' ;

const App = () =>{

  const [data,setData] = useState([]) ; 

  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos").then(
    res => setData(res.data)
  )} ,[]) ;

  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App
