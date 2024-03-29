import React,{useState} from 'react'
import "./App.css" ; 

function App() {
  const [input,setInput] = useState("") ; 
  const [result,setResult] = useState(0) ;
  
  const submitHandler = (e) => {
    e.preventDefault();
    setInput(input) ; 
    setResult(eval(input)) ;  
  }
  return (
    <div>
      <center>
      <input type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)}/><br />
      <button name="submit" type="submit" onClick={submitHandler}>Result</button> 
      <h3>Result is {result}</h3>
      <button onClick={() => setInput(input+"1")}>1</button>
      <button onClick={() => setInput(input+"2")}>2</button>
      <button onClick={() => setInput(input+"3")}>3</button>
      <button onClick={() => setInput(input+"4")}>4</button>
      <button onClick={() => setInput(input+"5")}>5</button> <br />
      <button onClick={() => setInput(input+"6")}>6</button>
      <button onClick={() => setInput(input+"7")}>7</button>
      <button onClick={() => setInput(input+"8")}>8</button>
      <button onClick={() => setInput(input+"9")}>9</button>
      <button onClick={() => setInput(input+"0")}>0</button> <br />
      <button onClick={() => setInput(input+"+")}>+</button>
      <button onClick={() => setInput(input+"-")}>-</button>
      <button onClick={() => setInput(input+"*")}>*</button>
      <button onClick={() => setInput(input+"/")}>/</button>
      <button onClick={() => {setInput("") ; setResult(0)}}>clr</button>
      </center>
    </div>
  )
}

export default App
