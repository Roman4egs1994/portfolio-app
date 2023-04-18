import {Dispatch} from "redux";
import {portfolioApi} from "../api/portfolio-api";
//
//
// const initialState: ContactStateType = {message: "Your message has be sent" }
// export const contactsReducer = (state = initialState,action:ContactsActionType) => {
//     switch (action.type) {
//         case "SEND-MESSAGE": {
//             alert("Your message has be sent")
//         }
//     }
// }
//
//
// export const sendMessageAC = () => ({type: "SEND-MESSAGE"}) as const
//
//
//
// export const sendMessageTC = () => {
//     return (dispatch: Dispatch) => {
//         portfolioApi.sendMessageGmail()
//             .then((res) => {
//                 dispatch(sendMessageAC())
//             })
//     }
// }
//
//
//
// type SendMessageACType = ReturnType<typeof sendMessageAC>
// type ContactsActionType = SendMessageACType
//
//
//
// type ContactStateType = {
//     message: string
// }

export const contactsReducer = () => {
    return ''
}
