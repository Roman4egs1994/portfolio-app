

const initialState: InitialStateType = {
    collapsed: false
}


export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "BURGER-MENU": {
            return {...state,collapsed: !action.collapsed}
        }
        default: {
            return  state
        }
    }

}


export const onOffCollapsedAC = (collapsed: boolean) => {
    return {
        type: "BURGER-MENU",
        collapsed
    } as const
}






export type OnOffCollapsedType = ReturnType<typeof onOffCollapsedAC>

type AppActionType = OnOffCollapsedType

type InitialStateType = {
    collapsed: boolean
}