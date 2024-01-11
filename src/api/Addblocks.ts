import { API_URL } from "../API_URL"
import { addBlockInputs } from "../pages/BlockCallerID"

export const addBlockCall = async (data:addBlockInputs)=>{
    const res = await fetch(`${API_URL}/auth/call-block`,{
        method:"Post",
        headers:{
            "Content-type" : "application/json",
            
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

export const deleteBlockNumber = async (id:number)=>{
    const res = await fetch(`${API_URL}/auth/delete-blocks/${id}`,{
        method:"delete",
     
    })
    return await res.json()
}

export const getBlockNumber = async ()=>{
    const res = await fetch(`${API_URL}/auth/all-blocks`,{
        method:"get",
        headers:{
            "Content-type" : "application/json",
            
        },
       
    })
    return await res.json()
}