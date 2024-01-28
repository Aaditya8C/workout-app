import { RENAME_NEW_TEMPLATE,ADD_EXERCISE_TO_NEW_TEMPLATE,REMOVE_EXERCISE_FROM_NEW_TEMPLATE, RESET_NEW_TEMPLATE, SET_NEW_TEMPLATE } from "../Actions/actions";

interface NewTemplateState{
    templateName: string,
    exercises:Array<string>,
    id:string,
}

const initialState :NewTemplateState = {
    templateName:"New Template",
    exercises:[],
    id:""
}


const newTemplateReducer  = (state = initialState, action:any) => {
    switch (action.type) {
        case RENAME_NEW_TEMPLATE:
            return {...state,templateName:action.name};
        case ADD_EXERCISE_TO_NEW_TEMPLATE:
            {
            const exercises_copy = [...state.exercises];
            exercises_copy.push(action.id);
            return {...state,exercises:exercises_copy};
            }
        case REMOVE_EXERCISE_FROM_NEW_TEMPLATE:
            { const exercises_copy = state.exercises.filter((item)=>{return item!==action.id})
            return {...state,exercises:exercises_copy};
            }
        case SET_NEW_TEMPLATE:
            {
            return {...state,...action.template};
            }
        case RESET_NEW_TEMPLATE:
            {
                return {...state,templateName:"New Template",exercises:[]}
            }
        default:
            return state;
    }
}

export default newTemplateReducer;