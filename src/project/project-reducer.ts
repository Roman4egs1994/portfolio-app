import {v1} from "uuid";
import imageProject1 from "../common/assets/imageProject/item-1.jpg";
import imageProject2 from "../common/assets/imageProject/item-2.jpg";
import imageProject3 from "../common/assets/imageProject/item-3.jpg";
import imageProject4 from "../common/assets/imageProject/item-4.jpg";
import imageProject5 from "../common/assets/imageProject/item-5.jpg";
import imageProject6 from "../common/assets/imageProject/item-6.jpg";


const initialState: ProjectStateType = {
    projects: [
        {
            id: v1(),
            image: imageProject1,
            title: "TodoList",
            headerProject: 'TodoList',
            href: "https://roman4egs1994.github.io/todolists/",
            status: "ready"
        },
        {
            id: v1(),
            image: imageProject2,
            title: "Stub",
            headerProject: 'Stub',
            href: "#",
            status: "not ready"
        },
        {
            id: v1(),
            image: imageProject3,
            title: "Stub",
            headerProject: 'Stub',
            href: "#",
            status: "not ready"
        },
        {
            id: v1(),
            image: imageProject4,
            title: "Stub",
            headerProject: 'Stub',
            href: "#",
            status: "not ready"
        },
        {
            id: v1(),
            image: imageProject5,
            title: "Stub",
            headerProject: 'Stub',
            href: "#",
            status: "not ready"
        },
        {
            id: v1(),
            image: imageProject6,
            title: "Stub",
            headerProject: 'Stub',
            href: "#",
            status: "not ready"
        }
    ]

}

export const projectReducer = (state = initialState, action: ProjectActionType) => {
    switch (action.type) {
        case "SET-PROJECT": {
            return action.project.map((el) => ({...el}))
        }
        case "PROJECT-STATUS": {
            return state.projects.map((el) => el.id === action.id
                ? {...el, status: action.status}
                : el
            )
        }
        default: {
            return state
        }
    }
}


const setProjectAC = (project: ProjectType[]) => ({type: "SET-PROJECT", project}) as const
const statusProjectAC = (id: string, status: TypeProjectStatus) =>
    ({type: "PROJECT-STATUS", id, status}) as const

type ProjectActionType = SetProjectACType | StatusProjectType

type SetProjectACType = ReturnType<typeof setProjectAC>
type StatusProjectType = ReturnType<typeof statusProjectAC>


type TypeProjectStatus = "ready" | 'not ready'
export type ProjectType = {
    id: string,
    image: string,
    title: string,
    headerProject: string,
    href: string,
    status: TypeProjectStatus
}

export type ProjectStateType = {
    projects: ProjectType[]
}
