
export type ModalStatusType = 'closeStatus' | 'openPositive' | 'openNegative'

type InitialStateType = {
    modalWindow: ModalStatusType
}

const initialState: InitialStateType = {
    modalWindow: "closeStatus"
}

export const ModalReducer = (state = initialState, action: ModalActionType): InitialStateType => {
    switch (action.type) {
        case "MODAL-WINDOW-ON-OFF": {
            return  {...state, modalWindow: action.value}
        }
        default: {
            return state
        }
    }
}


export const modalWindowsOnOffAC = (value: ModalStatusType) => {
    return {
        type: "MODAL-WINDOW-ON-OFF",
        value
    } as const
}


export type ModalWindowsOnOffType =  ReturnType<typeof modalWindowsOnOffAC>

type ModalActionType = ModalWindowsOnOffType