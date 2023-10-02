import React, { useState } from "react";

function App() {
  setInterval(currTime, 1000);

  const curr = new Date().toLocaleTimeString();
  console.log(curr);

  const [time, setTime] = useState(curr);

  function currTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currTime}>Get Time</button>
    </div>
  );
}

export default App;
