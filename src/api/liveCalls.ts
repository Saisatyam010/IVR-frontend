import { API_URL } from "../API_URL";
import api from "../services/api"

export const getLiveCalls=async()=>{
    const res=await api.get('/auth/live-calls',{headers:{
        "Content-type":"application/json"
    }})
    return res.data;l
}


export const getLivecalls = async ()=>{
    const res = await fetch(`https://ivr-backend-495f2e9ffa34.herokuapp.com/auth/live-calls`,{
        method:"get",
        headers:{
            "Content-type" : "application/json",
            
        },
       
    })
    return await res.json()
}