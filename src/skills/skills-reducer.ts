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
        description: "Architectural approach to development on React libraries. UI, BLL, DAL levels. Knowledge of both functional and class components."
    },
    {
        id: v1(),
        icon: typeScript,
        title: "TypeScript",
        description: 'Deep knowledge of TypeScript'
    },
    {
        id: v1(),
        icon: cssIcon,
        title: "Design Trends",
        description: "Understanding modern CSS. Using SCSS and lots of styling libraries."
    },
    {
        id: v1(),
        icon: figma,
        title: "Figma",
        description: "Ability to reproduce designs from Figma with great design accuracy."
    },
    {
        id: v1(),
        icon: storyBookIcon,
        title: "Storybook",
        description: "Can use StoryBook libraries to test and reuse components."
    },
    {
        id: v1(),
        icon: redux,
        title: "Redux",
        description: "I know how to formulate the BLL level of a React application in React. Using react-thunk. Knowledge of both redux-toolkit and legasy redux."
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