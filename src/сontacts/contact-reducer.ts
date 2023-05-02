
import {Dispatch} from "redux";
import {FormType, portfolioApi} from "../api/portfolio-api";


const initialState = {}
type InitialStateType = typeof initialState

export const contactReducer = (state = initialState, action: ContactFormActions):InitialStateType => {
    switch (action.type) {
        case "GET-FORM-VALUES": {
            return  action.values
        }
        default:
            return  state
    }
}



export const getFormValuesAC = (values: FormType) => {
    return {
        type: 'GET-FORM-VALUES',
        values
    }
}



export const getFormValuesTC = (data: FormType) => {
    return (dispatch:Dispatch) => {
        portfolioApi.sendMessageGmail(data)
            .then((res)=>{
                // dispatch(getFormValuesAC(data))
                alert('Письмо отправлено')
                console.log(res.request)
            })
            .catch((err)=>{
                console.log('Ошибка')
                console.log(err)
            })
            .finally(()=>{
                console.log('finaly')
            })
    }
}


type GetFormValuesACType = ReturnType<typeof getFormValuesAC>
type ContactFormActions = GetFormValuesACType