import { ChangeProfile } from "../components/ChangeProfile"

export const Profile = (props)=>{
    return <div>Profile, user is {props.username}
    <ChangeProfile setUsername = {props.setUsername}/>

    </div>
}