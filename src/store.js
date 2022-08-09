import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./reducers/modal/modalSlice";
import boardReducer from "./reducers/board/boardSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    board: boardReducer
  }
})

export default store;