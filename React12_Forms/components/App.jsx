import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const [heading, setHandleClick] = useState("");

  function handleClick(event) {
    setHandleClick(name);

    event.preventDefault(); // USED TO BE SAVE THE CURRENT STATE OR ELSE WHEN U SUBMIT THE FORM IT REFRESHES DEFAULTLY
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          // onClick = {handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
