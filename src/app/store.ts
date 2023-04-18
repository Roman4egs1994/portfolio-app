import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {appReducer} from "./app-reducer";
import thunk from "redux-thunk";
import {projectReducer} from "../project/project-reducer";
import {skillsReducer} from "../skills/skills-reducer";
import {contactsReducer} from "../сontacts/contacts-reducer";


export const rootReducer = combineReducers({
    appReducer: appReducer,
    projectReducer: projectReducer,
    skillsReducer: skillsReducer,
    contactsReducer: contactsReducer
})


export type AppRootStore = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


//@ts-ignore
window.store = store;