import {v1} from "uuid";
import reactIcon from "../common/assets/icon/reactIcon.png";
import typeScript from "../common/assets/icon/typescriptIcon.png";
import cssIcon from "../common/assets/icon/cssIcon.png";
import figma from "../common/assets/icon/figmaIcon.png";
import storyBookIcon from "../common/assets/icon/storybookIcon.png";
import redux from "../common/assets/icon/reduxIcon.png";


const initialState: SkillsStateType[] = [
    {
        id: v1(),
        icon: reactIcon,
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: v1(),
        icon: typeScript,
        title: "TypeScript",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        id: v1(),
        icon: cssIcon,
        title: "Design Trends",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: v1(),
        icon: figma,
        title: "Figma",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: v1(),
        icon: storyBookIcon,
        title: "Storybook",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: v1(),
        icon: redux,
        title: "Redux",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
]

export const skillsReducer = (state = initialState, action: SkillsActionType) => {
    switch (action.type) {
        case "SET-SKILLS": {
            return  action.skills.map((el) => ({...el}))
        }
        default: {
            return  state
        }
    }
}

const setProjectAC = (skills:SkillsStateType[]) => ({type: "SET-SKILLS", skills} ) as const


type SetSkillsACType = ReturnType<typeof setProjectAC>
type SkillsActionType = SetSkillsACType

export type SkillsStateType = {
    icon: string
    id: string
    title: string
    description: string
}