import { RENAME_NEW_TEMPLATE,ADD_EXERCISE_TO_NEW_TEMPLATE,REMOVE_EXERCISE_FROM_NEW_TEMPLATE } from "../Actions/actions";

interface NewTemplateState{
    templateName: string,
    exercises:Array<string>
}

const initialState :NewTemplateState = {
    templateName:"Shoulders - Variation 1",
    exercises:["1","2","5","4","3","9"]
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
        default:
            return state;
    }
}

export default newTemplateReducer;