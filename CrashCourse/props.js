import './App.css';

const Person = (props) => {
  return (
    <>
    <h1> First Name: {props.firstName}</h1>
    <h2> Last Name: {props.lastName}</h2>
    <h3> Age: {props.age}</h3>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Person firstName="Naga Nitish" lastName="Kapu" age="23"/>
      <Person firstName="Navaneethan" lastName="Gopal" age="33"/>
      <Person firstName="Dinesh" lastName="Sheelam" age="24"/>
    </div>
  );
}

export default App;
