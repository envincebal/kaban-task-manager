import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import modalReducer from "./reducers/modal/modalSlice";
import boardReducer from "./reducers/board/boardSlice";

const reducers = combineReducers({
    modal: modalReducer,
    board: boardReducer 
});

const persistConfig ={
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store;