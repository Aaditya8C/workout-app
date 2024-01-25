
import newTemplateReducer from '../Reducers/newtemplateReducer';
import templatesReducer from "../Reducers/templatesReducer";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    FLUSH, PAUSE,
    PERSIST, PURGE,
    REGISTER, REHYDRATE
  } from 'redux-persist';

const persistConfig = {
    key: 'rosdfdsfdft',
    storage: AsyncStorage,
  };

//   combine all reducers
const rootReducer = combineReducers({
    newTemplate:newTemplateReducer,
    templates:templatesReducer
});

const persistedRootReducer = persistReducer(persistConfig,<any>rootReducer);

const store = configureStore({ reducer:persistedRootReducer 
,
middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const persistor = persistStore(store);
export default store;