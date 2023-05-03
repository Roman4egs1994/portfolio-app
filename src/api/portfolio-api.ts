import axios from "axios";
import {Dispatch} from "redux";

// const instance = axios.create({
//     baseURL: "http://localhost:3010/sendMessage"
// })

// export const portfolioApi = {
//     sendMessageGmail(data: FormType){
//         return axios.post('http://localhost:5000/sendMessage', data)
//     }
// }
export const portfolioApi = {
    sendMessageGmail(data: FormType){
        return axios.post('https://potfolio-app-zeta.vercel.app/message', data)
    }
}

export type FormType = {
    textName: string
    email: string
    textSubject: string
    message: string
}