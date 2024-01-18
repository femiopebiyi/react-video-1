import { useEffect, useState, useContext } from "react";
import { BlogList } from "../BlogList";
import useFetch from "../useFetch";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";



export const Home = ()=>{
    // const fetch = async ()=>{
    //     console.log(Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    //     )
        
    // }
    const {data: catData, isLoading, isError, refetch} = useQuery({queryKey: ['cat'], queryFn: ()=>{
         return Axios.get("https://catfact.ninja/fact").then((res)=>{
            return res.data.fact
         })
    }})

console.log(catData)
if(isError){
    return <h1>error fetching</h1>
}


if(isLoading){
    return <h1>Loading fact</h1>
}

    return <h1>This is the home page <p>{catData}</p> 
    
    <button onClick={refetch}>Refetch data</button>
    </h1>
}
