import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";
const boardSlice = createSlice({
  name: "board",
  initialState:{
    boards:[],
    activeBoard: null
  },
  reducers:{
    addBoard: (state, {payload}) =>{
      const uniqueID = uuid();
      const newBoard = {
        id: uniqueID,
        name: payload.name,
        columns:[]
      }
    }
  }
});

const {addBoard} = boardSlice.actions;

export default boardSlice.reducer;