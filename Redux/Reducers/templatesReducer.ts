import { useDispatch } from "react-redux";
import { ADD_TEMPLATE,REMOVE_TEMPLATE, resetNewTemplate } from "../Actions/actions";

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
            return [state.filter((template)=>{return template.id!==action.id})];
            }
        default:
            return state;
    }
}

export default templatesReducer;