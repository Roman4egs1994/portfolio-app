import axios from "axios";
import {Dispatch} from "redux";

// const instance = axios.create({
//     baseURL: "http://localhost:3010/sendMessage"
// })

export const portfolioApi = {
    sendMessageGmail(){
        return axios.post('http://localhost:3010/sendMessage')
    }
}


