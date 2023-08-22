import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// console.log(contacts) ;

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        alt="avatar_img1"
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        alt="avatar_img2"
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        alt="avatar_img3"
        tel={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
