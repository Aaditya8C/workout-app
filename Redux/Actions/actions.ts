import { useSelector } from "react-redux";

import store from "../Store/store";

// for newTemplateReducer
export const ADD_EXERCISE_TO_NEW_TEMPLATE  = "ADD_EXERCISE_TO_NEW_TEMPLATE";
export const REMOVE_EXERCISE_FROM_NEW_TEMPLATE  = "REMOVE_EXERCISE_FROM_NEW_TEMPLATE";
export const RENAME_NEW_TEMPLATE = "RENAME NEW TEMPLATE";
export const RESET_NEW_TEMPLATE = "RESET_NEW_TEMPLATE";

export const renameNewTemplate = (name: string) => ({ type: RENAME_NEW_TEMPLATE, name });
export const addExerciseToNewTemplate = (id:string) => ({type:ADD_EXERCISE_TO_NEW_TEMPLATE,id});
export const removeExerciseFromNewTemplate = (id:string) => ({type:REMOVE_EXERCISE_FROM_NEW_TEMPLATE,id});
export const resetNewTemplate  = ()=>({type:RESET_NEW_TEMPLATE});


// for templatesReducer
export const ADD_TEMPLATE = "ADD_TEMPLATE";
export const REMOVE_TEMPLATE = "REMOVE_TEMPLATE";

export const addTemplate = (template:any)=>{
    return {type:ADD_TEMPLATE,template};
}

export const removeTemplate = (id:string)=>{
     return {type:REMOVE_TEMPLATE,id};
}
