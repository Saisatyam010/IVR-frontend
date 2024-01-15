import { API_URL } from "../API_URL"

export const getAllRecording = async ()=>{
    const res = await fetch(`${API_URL}/auth/all-call-recording`,{
        method:"get",
        headers:{
            "Content-type" : "application/json",
            
        },
       
    })
    return await res.json()
}