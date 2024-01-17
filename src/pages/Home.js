import { useEffect, useState } from "react";
import { BlogList } from "../BlogList";
import useFetch from "../useFetch";

export const Home = (props)=>{

    return <h1>This is the home page and user is {props.username}</h1>
}
