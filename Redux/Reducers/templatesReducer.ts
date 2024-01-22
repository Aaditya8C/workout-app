import { ADD_TEMPLATE,REMOVE_TEMPLATE } from "../Actions/actions";

interface Templates{
    id:string,
    templateName:string,
    exercises:Array<string>
}

const initialState :Array<Templates> = [{id:"sdfs22dfdsfsd",templateName:"Boulders Gunda Bro",exercises:["12","5","7","8","9"]},{id:"sdfsdfdssdf3fsd",templateName:"Legs Bro",exercises:["4","5","6","7"]}];


const templatesReducer  = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_TEMPLATE:
            return [...state,action.template];
        case REMOVE_TEMPLATE:
            {
            return state.filter((template)=>{return template.id!==action.id});
            }
        default:
            return state;
    }
}

export default templatesReducer;