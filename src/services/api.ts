import axios from "axios";

const api=axios.create({
    baseURL:'https://ivr-backend-495f2e9ffa34.herokuapp.com'
})

export default api;