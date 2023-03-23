import {combineReducers, createStore, legacy_createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";


export const rootReducer = combineReducers({
    appReducer: appReducer
})


export type AppRootStore = ReturnType<typeof rootReducer>


export const store = legacy_createStore(rootReducer)


//@ts-ignore
window.store = store;