import api from "../services/api"

export const getLiveCalls=async()=>{
    const res=await api.get('/auth/live-calls',{headers:{
        "Content-type":"application/json"
    }})
    return res.data;
}