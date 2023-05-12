import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStore} from "../store";

export type AppDispatchType = ThunkDispatch<AppRootStore, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()


export const useAppSelector: TypedUseSelectorHook<AppRootStore> = useSelector