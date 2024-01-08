 export const Task = (props)=>{
    return <div className='contain' style={{backgroundColor:props.completed ? "green" : "white"}}>
            <h2 style={{color: props.color}}>{props.taskName}</h2>
            <button onClick={()=>props.completeTask(props.id)}>Complete</button>
            <button onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>
}