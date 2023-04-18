import {v1} from "uuid";
import imageProject1 from "../common/assets/imageProject/item-1.jpg";
import imageProject2 from "../common/assets/imageProject/item-2.jpg";
import imageProject3 from "../common/assets/imageProject/item-3.jpg";
import imageProject4 from "../common/assets/imageProject/item-4.jpg";
import imageProject5 from "../common/assets/imageProject/item-5.jpg";
import imageProject6 from "../common/assets/imageProject/item-6.jpg";


const initialState: ProjectStateType[] = [
    {
        id: v1(),
        image: imageProject1,
        title: "Social Network",
        headerProject: 'Описание',
        href: "www.google.com"
    },
    {
        id: v1(),
        image: imageProject2,
        title: "Todolist",
        headerProject: 'Описание',
        href: "www.google.com"
    },
    {
        id: v1(),
        image: imageProject3,
        title: "Counter",
        headerProject: 'Описание',
        href: "www.google.com"
    },
    {
        id: v1(),
        image: imageProject4,
        title: "Counter",
        headerProject: 'Описание',
        href: "www.google.com"
    },
    {
        id: v1(),
        image: imageProject5,
        title: "Counter",
        headerProject: 'Описание',
        href: "www.google.com"
    },
    {
        id: v1(),
        image: imageProject6,
        title: "Counter",
        headerProject: 'Описание',
        href: "www.google.com"
    },
]

export const projectReducer = (state = initialState, action: ProjectActionType) => {
    switch (action.type) {
        case "SET-PROJECT": {
            return  action.projects.map((el) => ({...el}))
        }
        default: {
            return  state
        }
    }
}



const setProjectAC = (projects:ProjectStateType[]) => ({type: "SET-PROJECT", projects} ) as const



type SetProjectACType = ReturnType<typeof setProjectAC>

type ProjectActionType = SetProjectACType


export type ProjectStateType = {
    id: string,
    image: string,
    title: string,
    headerProject: string,
    href:string
}