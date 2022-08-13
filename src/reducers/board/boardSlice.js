import {createSlice} from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
    activeBoard: null
  },
  reducers: {
    setActiveBoard: (state, {payload}) => {
      state.activeBoard = payload;
    },
    addBoard: (state, {payload}) => {
    
      const newBoard = {
        id: payload.id,
        name: payload.name,
        columns: payload.columns
      }
      state.boards.push(newBoard);
  state.activeBoard = payload.id;
    }
  }
});

export const {
  addBoard,
  setActiveBoard
} = boardSlice.actions;

export default boardSlice.reducer;