import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You have changed the counter to " + counter);
  }, [counter]);
  // the second list is dependency list, the useEffect hook runs initially when the 
  // App renders and renders everytime if the dependency list values changes

  return (
    <div className="App">
      <button onClick={() => setCounter(counter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter+1)}>+</button>
    </div>
  );
}

export default App;
