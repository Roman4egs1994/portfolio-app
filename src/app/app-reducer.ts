

const initialState: InitialStateType = {
    collapsed: false,
    statusLoading: 'idle'
}


export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "BURGER-MENU": {
            return {...state,collapsed: !action.collapsed}
        }
        default: {
            return  {...state, statusLoading: action.statusLoading}
        }
    }

}


export const onOffCollapsedAC = (collapsed: boolean) => {
    return {
        type: "BURGER-MENU",
        collapsed
    } as const
}

export const setStatusLoadingAC = (statusLoading:StatusLoadingType) =>{
    return {
        type: "SET-STATUS-LOADING",
        statusLoading
    } as const
}




export type OnOffCollapsedType = ReturnType<typeof onOffCollapsedAC>
export type SetStatusLoadingType = ReturnType<typeof setStatusLoadingAC>

type AppActionType = OnOffCollapsedType | SetStatusLoadingType



type InitialStateType = {
    collapsed: boolean
    statusLoading: StatusLoadingType
}

export type StatusLoadingType = 'idle' | 'loading' | "success" | 'failed'