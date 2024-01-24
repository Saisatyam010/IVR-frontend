import { API_URL } from "../API_URL"
import {  BuyerInputs } from "../pages/Buyers/Addbuyer"

export const addBuyerData = async (data:BuyerInputs)=>{
    const res = await fetch(`${API_URL}/auth/addbuyer`,{
        method:"Post",
        headers:{
            "Content-type" : "application/json",
            
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

export const getSingleBuyer=async(buyerId:string)=>{
    const res=await fetch(`${API_URL}/auth/singleBuyer/${buyerId}`,{
        method:"Get",
        headers:{
            "Content-type":"application/json"
        },
      
    });
    return await res.json();
}
export const editBuyer=async (data:BuyerInputs,buyerId:string|undefined)=>{
    const res=await fetch(`${API_URL}/auth/updateBuyerData/${buyerId}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return await res.json();
}

export const getCampainData = async ()=>{
    const res = await fetch(`${API_URL}/auth/getAllBuyerDetail`,{
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

