import { useState } from "react"

export const ChangeProfile = (props)=> {
    const [newusername, setNewUsername] = useState("")
    function changeUsername(event){
        setNewUsername(event.target.value)
    }
    return <div>
        <input onChange={changeUsername}/>
        <button onClick={()=>{props.setUsername(newusername)}}>Change Username</button>
    </div>
}