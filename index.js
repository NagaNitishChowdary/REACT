var React = require("react");
var ReactDOM = require("react-dom");

// SYNTAX
// ReactDOM.render(WHAT TO SHOW , WHERE TO SHOW , OPTIONAL CALLBACK)

// ReactDOM.render(
//   <h1> Hi KNNC U Can Learn REACT With In No Time.</h1>,
//   document.getElementById("root")
// );

// OR

// var h1 = document.createElement("h1") ;
// h1.innerHTML = "Hi KNNC U Can Learn REACT With In No Time." ;
// document.getElementById("root").appendChild(h1) ;

// var fName = "Naga Nitish" ;
// var lName = "kapu" ;

// ReactDOM.render(
//   <p> My Name is {fName + " " + lName} </p>,
//   document.getElementById("root")
// );

// const owner = "Naga Nitish";
// const date = new Date();
// const currYear = date.getFullYear();

// ReactDOM.render(
//   <div>
//     <p> Created by {owner} </p>
//     <p> © Copyright {currYear} </p>
//   </div>,
//   document.getElementById("root")
// );

//  EXTERNAL STYLING
// ReactDOM.render(
//   <div>
//     <h1 className="heading">My Favourite Foods</h1>

//     <div>
//       <img
//         className="food-img"
//         alt="bacon"
//         src="https://imgs.search.brave.com/A9C9yibzh5zZWAPIGFZGr9nFddnKLGi9AW5TgkP3dEs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/Njc1ODc3MC9waG90/by9jaGluZXNlLWhv/bWVtYWRlLW5vb2Rs/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNld3VJVEQ4/MV9xbWN6Znp1MXB5/XzUtLVhOUnZFLWN3/a1ZaYS1qWmpONkE9"
//       ></img>
//       <img
//         className="food-img"
//         alt="jamon"
//         src="https://imgs.search.brave.com/FEMdpWFkSnFvbyfvqHowhEHh_RlMkBSbbljWA_FxWoI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/OTkwNDQyMi9waG90/by9pbnN0YW50LW5v/b2RsZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPURqY2dv/YjliekJWc0NqN1hC/MjRic2RKQ2JtRjJq/RTJlOElqc0V5eTVX/TFk9"
//       ></img>
//       <img
//         className="food-img"
//         alt="noodle"
//         src="https://imgs.search.brave.com/0Btr0ObeubveOcX04ML-rI7aUNLRW9aOZHz9VSxRiHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDczNzU1L3Bob3Rv/L3dvbWFuLW1ha2lu/Zy1zb21lLW5vb2Rs/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTE4V0JSMmtN/aERKYnBxRmlXaDB5/VElLTC1faDFlSGlE/bHg5X1VWeUNCWW89"
//       ></img>
//     </div>
//   </div>,
//   document.getElementById("root")
// );

// INLINE STYLING
// const customStyle = {
//   color: "blue",
//   fontSize: "20px",
//   border: "1px solid red"
// };

// customStyle.color = "violet";

// ReactDOM.render(
//   <div>
//     <h1 style={{ color: "green" }}> Hi I applied inline styling for this </h1>
//     <p style={customStyle}> Hi Bro This is a paragraph! </p>
//   </div>,
//   document.getElementById("root")
// );

// CREATE A REACT APP FROM STRATCH
// SHOW A SINGLE H1 THAT SAYS "GOOD MORNING" IF BETWEEN MIDNIGHT AND 12PM
// OR "GOOD AFTERNOON" IF BETWEEN 12PM AND 6PM
// OR "GOOD EVENING" IF BETWEEN 6PM AND MIDNIGHT
// APPLY THE "heading" STYLE IN THE style.css
// DYNAMICALLY CHANGE THE COLOR OF h1 USING INLINE CSS STYLE
// MORNING = RED , AFTERNOON = GREEN , NIGHT = BLUE

const date = new Date();
const currTime = date.getHours();

const customStyle = {
  color: "skyblue"
};

var greeting;
if (currTime < 12) {
  greeting = "Good Morning" ;
  customStyle.color = "red" 
} else if (currTime < 18) {
  greeting = "Good AfterNoon";
  customStyle.color = "green" 
} else {
  greeting = "Good Evening";
  customStyle.color = "blue"
}

ReactDOM.render(
  <h1 class="heading" style={customStyle}>
    {" "}
    {greeting}{" "}
  </h1>,
  document.getElementById("root")
);

// customStyle.color = "violet";

// ReactDOM.render(
//   <div>
//     <h1 style={{ color: "green" }}> Hi I applied inline styling for this </h1>
//     <p style={customStyle}> Hi Bro This is a paragraph! </p>
//   </div>,
//   document.getElementById("root")
// );

// CREATE A REACT APP FROM STRATCH
// SHOW A SINGLE H1 THAT SAYS "GOOD MORNING" IF BETWEEN MIDNIGHT AND 12PM
// OR "GOOD AFTERNOON" IF BETWEEN 12PM AND 6PM
// OR "GOOD EVENING" IF BETWEEN 6PM AND MIDNIGHT
// APPLY THE "heading" STYLE IN THE style.css
// DYNAMICALLY CHANGE THE COLOR OF h1 USING INLINE CSS STYLE
// MORNING = RED , AFTERNOON = GREEN , NIGHT = BLUE

// var date = new Date();
// console.log(date);

// ReactDOM.render(<h1>hi this is knnc</h1>, document.getElementById("root"));

// IMPORTS AND EXPORTS

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// TYPE 1
// import pi, { doublePi, triplePi } from "./math.js";

// TYPE 2
// import * as pi from "./math.js";

// ReactDOM.render(
//   // <ul>
//   //   <li> {pi} </li>
//   //   <li> {doublePi()} </li>
//   //   <li> {triplePi()} </li>
//   // </ul>,
//   <ul>
//     <li> {pi.default} </li>
//     <li> {pi.doublePi()} </li>
//     <li> {pi.triplePi()} </li>
//   </ul>,
//   document.getElementById("root")
// );

import * as math from "./math.js";

ReactDOM.render(
  <ul>
    <li> {math.add(1, 2)} </li>
    <li> {math.multiply(2, 3)} </li>
    <li> {math.subtract(7, 2)} </li>
    <li> {math.divide(5, 2)} </li>
  </ul>,
  document.getElementById("root")
);

