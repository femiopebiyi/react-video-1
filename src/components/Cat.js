import {useQuery} from '@tanstack/react-query'
import  Axios  from 'axios'
import { useGetCat } from '../useGetCat'

export const Cat = ()=>{
   const {data, isCatLoading, refetchData} = useGetCat()
    if(isCatLoading) {
        return <h1>loading</h1>
    }

    return <div>
        <h1>{data.fact}</h1>
        <button onClick={refetchData}>reload</button>
    </div>
}