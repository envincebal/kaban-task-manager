import {createSlice} from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
    activeBoard: null
  },
  reducers: {
    setActiveBoard: (state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === payload);
      state.activeBoard = getBoardByID;
    },
    addBoard: (state, {payload}) => {
      const newBoard = {
        id: payload.id,
        name: payload.name,
        columns: payload.columns
      }
      if (state.boards.length === 0) {
        state.activeBoard = newBoard;
      }
      state.boards.push(newBoard);
    },
    editBoard: (state, {payload}) => {
      state.activeBoard.columns = payload;
    },
    deleteCurrentBoard: (state, {payload}) => {
      const deletedBoard = state.boards.filter(item => item.id !== state.activeBoard.id);

      state.boards = deletedBoard;

      state.activeBoard = state.boards[0];
    },
    addColumn: (state, {payload}) => {
      state.activeBoard.columns.push(payload)
    }

  }
});

export const {
  addBoard,
  setActiveBoard,
  deleteCurrentBoard,
  addColumn,
  editBoard
} = boardSlice.actions;

export default boardSlice.reducer;