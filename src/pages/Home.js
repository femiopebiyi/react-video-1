import { useEffect, useState, useContext } from "react";
import { BlogList } from "../BlogList";
import useFetch from "../useFetch";
import { AppContext } from "../App";

export const Home = ()=>{
    const {username} = useContext(AppContext)

    return <h1>This is the home page and user is {username}</h1>
}
