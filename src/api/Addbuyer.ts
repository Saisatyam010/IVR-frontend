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
