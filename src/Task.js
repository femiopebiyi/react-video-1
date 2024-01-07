 export const Task = (props)=>{
    return <div className='contain'>
              <h2>{props.taskName}</h2>
              <button onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>
}