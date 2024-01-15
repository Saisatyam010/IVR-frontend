import { API_URL } from "../API_URL"
import {  addBuyerInputs } from "../pages/Addbuyer"

export const addBuyerData = async (data:addBuyerInputs)=>{
    const res = await fetch(`${API_URL}/auth/addbuyer`,{
        method:"Post",
        headers:{
            "Content-type" : "application/json",
            
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}


export const getCampainData = async ()=>{
    const res = await fetch(`https://ivr-backend-495f2e9ffa34.herokuapp.com/auth/getAllBuyerDetail`,{
        method:"get",
        headers:{
            "Content-type" : "application/json",
            
        },
       
    })
    return await res.json()
}


export const deleteBuyerId = async (id:number)=>{
    const res = await fetch(`${API_URL}/auth/deleteBuyerData/${id}`,{
        method:"delete",
     
    })
    return await res.json()
}