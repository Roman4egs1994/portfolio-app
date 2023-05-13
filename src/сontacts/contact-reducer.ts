
import {Dispatch} from "redux";
import {FormType, portfolioApi} from "../api/portfolio-api";
import {setStatusLoadingAC, SetStatusLoadingType} from "../app/app-reducer";
import {modalWindowsOnOffAC, ModalWindowsOnOffType} from "../common/componets/modalWindow/modalReducer";


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
        dispatch(setStatusLoadingAC('loading'))
        portfolioApi.sendMessageGmail(data)
            .then((res)=>{
                // dispatch(getFormValuesAC(data))
                // alert('Письмо отправлено')
                dispatch(setStatusLoadingAC('success'))
                dispatch(modalWindowsOnOffAC("openPositive"))
            })
            .catch((err)=>{
                dispatch(setStatusLoadingAC('failed'))
                dispatch(modalWindowsOnOffAC("openNegative"))
            })
    }
}


type GetFormValuesACType = ReturnType<typeof getFormValuesAC>
type ContactFormActions = GetFormValuesACType | SetStatusLoadingType | ModalWindowsOnOffType