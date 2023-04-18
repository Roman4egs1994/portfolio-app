import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:3010/sendMessage"
// })

const portfolioApi = {
    sendMessageGmail(){
        return axios.post('http://localhost:3010/sendMessage')
    }
}