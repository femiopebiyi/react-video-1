
import './App.css';
import { useState } from 'react';
// import {Users } from "./User"
// import { planets } from './planets';

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
// function App() {
// let peopleArray = [
//   { name: "John", age: 25 },
//   { name: "Emily", age: 30 },
//   { name: "Michael", age: 22 }
// ];

//   return (
//     <div className="App">
//       {peopleArray.map((user, key)=>{
//       return <Users name={user.name} age={user.age}/>
//       })}
//     </div>
//   );
// }
// function App() {


//   return (
//     <div className="App">
//       {planets.map((planet)=>{
//         return planet.isGasPlanet &&  <h1>{planet.name}</h1>
//       })}
//     </div>
//   );
// }


  // function App() {
  //   let [age, setAge] = useState(0)
  //   const increaseAge = ()=>{
  //     setAge(age+=1)
  //   }
  //   return (
  //     <div className="App">
  //       {age} <button onClick={increaseAge}>Increase Age</button>
  //     </div>
  //   );
  // }
  // function App() {
  //   let [inputValue, setInputValue] = useState("")

  //   const handleInputChange = (event)=>{
  //     setInputValue(event.target.value)
  //   }
    
  //   return (
  //     <div className="App">
  //       <input type='text' onChange={handleInputChange}/>
  //       <p>{inputValue}</p>
  //     </div>
  //   );
  // }

  // function App() {
  //   let [textColor, showTextColor] = useState("black")
  
  //   return (
  //     <div className="App">
  //       <button onClick={()=>{
  //         showTextColor(textColor === "black" ? "red" : "black")
  //       }}>Show/Hide</button>
  //       <h1 style={{color: textColor}}>Hi my name is femi</h1>
  //     </div>
  //   );
  // }

  function App() {
    const  [count, setCount] = useState(0)

    function increase(){
      setCount(count+1)
    }
  
 function decrease(){
    setCount(count-1)
 }

 function setToZero (){
  setCount(0)
 }

    return (
      <div className="App">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={setToZero}>set to 0</button>
        <h1>{count}</h1>
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

// const User = (props)=>{
//   return <div>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     <h1>{props.email}</h1>
//   </div>
// }


// const Job = (props)=>{
//   return <div>
//     <h1>{props.salary}</h1>
//     <h1>{props.position}</h1>
//     <h1>{props.company}</h1>
//   </div>
// }

// const Planet = (props)=>{
//   return <div>
      
//     </div>
// }