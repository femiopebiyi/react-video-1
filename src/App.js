
import './App.css';
import {Users } from "./User"

// function App() {
//   const age = 17
//   const isGreen = true
//   return (
//     <div className="App">
//       {/* <h1 className='name'>Opebiyi</h1> */}
//       {age < 18 ? <h1>Under age</h1> : <h1>Over age</h1>}
//       <h1 style={{color: isGreen ? "red" : "green"}}>THis has color</h1>

//       {isGreen && <button>This is a button</button>}
//     </div>
//   );
// }

// function App() {
//   const names = ['femi', 'francis', 'wilson', 'neymar', 'higuain']
//   return (
//     <div className="App">
//       {names.map((name, key)=>{
//         return <h1 key={key}>{`${key + 1}: ${name}`}</h1>
//       })}
//     </div>
//   );
// }
function App() {
let peopleArray = [
  { name: "John", age: 25 },
  { name: "Emily", age: 30 },
  { name: "Michael", age: 22 }
];

  return (
    <div className="App">
      {peopleArray.map((user, key)=>{
      return <Users name={user.name} age={user.age}/>
      })}
    </div>
  );
}



export default App;


// const getName = () =>{
//   return "Pedro"
// }

// const GetNameComponent = ()=>{
//   return <h2>Pedro</h2>
// }

const User = (props)=>{
  return <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
  </div>
}


const Job = (props)=>{
  return <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
}