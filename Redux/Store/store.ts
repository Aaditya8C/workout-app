import { configureStore } from '@reduxjs/toolkit'

import newTemplateReducer from '../Reducers/newtemplateReducer';
import templatesReducer from "../Reducers/templatesReducer";
const store = configureStore({ reducer: {
    newTemplate:newTemplateReducer,
    templates:templatesReducer
} })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;