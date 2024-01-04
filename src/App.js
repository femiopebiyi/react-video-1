
import './App.css';

function App() {
  return (
    <div className="App">
      <User name ="bola" age= {25} email = "bola.com"/>
      <User/>
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