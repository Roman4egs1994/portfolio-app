import axios from "axios";


export const portfolioApi = {
    sendMessageGmail(data: FormType){
        return axios.post('https://backend-portfolio-production-e60f.up.railway.app/message', data, {headers: {
                'Content-Type': 'application/json'
            }})
    }
}

export type FormType = {
    textName: string
    email: string
    textSubject: string
    message: string
}