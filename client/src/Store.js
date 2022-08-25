import rootReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { createStore, applyMiddleware } from 'redux'; 
import { persistReducer, persistStore } from "redux-persist";
import ReduxThunk from 'redux-thunk'; 
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage: storage
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(ReduxThunk))
); 

export default store; 