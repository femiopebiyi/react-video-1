import { useCounter } from "../useCounter"

export function Counter (){

    const {increase, decrease, restart ,number} = useCounter()

    return <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
        <h1>{number}</h1>
    </div>
}