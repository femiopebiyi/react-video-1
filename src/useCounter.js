import { useState } from "react";

export function useCounter(){
    let [number, setNumber] = useState(0)

    const increase = ()=>{
        setNumber(number+=1)
    }

    const decrease = ()=>{
        setNumber(number-=1)
    }

    const restart = ()=>{
        setNumber(number=0)
    }

    return {increase, decrease, restart ,number}
}
