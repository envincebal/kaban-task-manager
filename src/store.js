import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer
  }
})

export default store;