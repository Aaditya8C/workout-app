import { useDispatch } from "react-redux";
import { ADD_TEMPLATE,EDIT_TEMPLATE,REMOVE_TEMPLATE, resetNewTemplate } from "../Actions/actions";
import { template } from "@babel/core";

interface Templates{
    id:string,
    templateName:string,
    exercises:Array<string>
}

const initialState =[
        {id:"sdfs22dfdsfsd",templateName:"Legs Day Vairation -1 (Monday)",exercises:["0001","1512","1709","0016"]}
    ]

const templatesReducer  = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_TEMPLATE:{
            return [...state,action.template]
        };
        case REMOVE_TEMPLATE:
            {
            return state.filter((template)=>{return template.id!==action.id});
            }
        case EDIT_TEMPLATE:
            {
            return state.map((item)=>{
                if(item.id===action.template.id){
                    item.exercises = action.template.exercises;
                    item.templateName = action.template.templateName;
                }
                return item;
            })
            }
        default:
            return state;
    }
}

export default templatesReducer;