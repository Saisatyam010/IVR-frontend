import { API_URL } from "../API_URL";
import api from "../services/api"

export const getLiveCalls=async()=>{
    const res=await api.get('/auth/live-calls',{headers:{
        "Content-type":"application/json"
    }})
    return res.data;
}


export const getLivecalls = async ()=>{
    const res = await fetch(`http://localhost:1337/auth/live-calls`,{
        method:"get",
        headers:{
            "Content-type" : "application/json",
            
        },
       
    })
    return await res.json()
}