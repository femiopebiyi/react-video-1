
import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
// import { Task } from './Task';
import { Text } from './Text';
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

//   function App() {
//     const  [count, setCount] = useState(0)

//     function increase(){
//       setCount(count+1)
//     }
  
//  function decrease(){
//     setCount(count-1)
//  }

//  function setToZero (){
//   setCount(0)
//  }

//     return (
//       <div className="App">
//         <button onClick={increase}>Increase</button>
//         <button onClick={decrease}>decrease</button>
//         <button onClick={setToZero}>set to 0</button>
//         <h1>{count}</h1>
//       </div>
//     );
//   }

  // function App() {
  //   const [todoList, setTodoList] = useState([])
  //   const [newTask, setNewTask] = useState("")

  //   function handleChange(input){
  //     setNewTask(input.target.value)
  //   }

  //   function addTask(){
  //     const task = {
  //       id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
  //       taskName: newTask,
  //       completed: false
  //     }
  //     const newTodoList = [...todoList, task]
  //     setTodoList(newTodoList)
  //   }

  //   function deleteTask(id){
  //     const newTodoList = todoList.filter((task)=>{
  //       return task.id !== id
  //     })

  //     setTodoList(newTodoList)
  //   }

  //   const completeTask = (id)=>{
  //     setTodoList(
  //       todoList.map((task)=>{
  //         if(task.id === id){
  //           return{...task, completed:true}
  //         } else{
  //           return task
  //         }
  //       })
  //     )

      
  //   }

  //   return (
  //     <div className="App">
  //       <div className='addTask'>
  //         <input onChange={handleChange}/>
  //         <button onClick={addTask}>Add Task</button>
  //       </div>
  //       <div className='list'>
  //         {todoList.map((item)=>{
  //           return <Task taskName = {item.taskName} id= {item.id} deleteTask={deleteTask} completeTask={completeTask} completed={item.completed}/>
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  // function App(){
  //   const [showText, setShowText] = useState(false)

  //   return <div className='App'>
  //     <button
  //     onClick={()=>{
  //       setShowText(!showText)
  //     }}
  //     >
  //       Show Text
  //     </button>

  //     {showText && <Text/>}
  //   </div>
  // }



  // function App(){
  //   const [catFact, setCatFact] = useState("")
    
  //   const generateCatFact = ()=>{
  //     Axios.get("https://catfact.ninja/fact").then((res)=>{
  //       setCatFact(res.data.fact)
  //     })
  //   }

  //   useEffect(()=>{
  //     generateCatFact()
  //   },[])

      

  //   return <div className='App'>
  //     <button onClick ={generateCatFact}>Generate Caat Fact</button>
  //     <p>{catFact}</p>
  //   </div>
  // }



  function App(){
    const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)
    const fetchData = ()=>{
      Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res)=>{
          setPredictedAge(res.data)
        })
    }

    return <div className='App'>
      <input placeholder= "Ex. Pedro" onChange ={(event)=>{setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict Age</button>
      <p>name: {predictedAge?.name}, Predicted Age: {predictedAge?.age} </p>
    </div>
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