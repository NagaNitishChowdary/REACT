import React,{useEffect,useState} from 'react'

const App = () => {

  const [data,setData] = useState([]) ;

  useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
  .then(json => setData(json))},[])

  return (
    <div>
      <h1> Hello World! </h1><br />
      {data.map(item => <li key={item.id}>{item.title}</li>)} 
    </div>
  )
}

export default App
