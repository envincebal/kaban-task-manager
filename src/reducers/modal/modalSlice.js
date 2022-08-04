import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    editBoardModal: false,
    editTaskModal: false,
    newBoardModal: false,
    newColumnModal: false,
    newTaskModal: false
  },
  reducers: {
    editBoard: (state) => {
      state.editBoardModal = true;
    },
    editTask: (state) => {
      state.editTaskModal = true;
    },
    newBoard: (state) => {
      state.newBoardModal = true;
    },
    newColumn: (state) => {
      state.newColumnModal = true;
    },
    newTask: (state) => {

      state.newTaskModal = true;
    },
    hideModal: (state) => {
      state.editBoardModal = false;
      state.editTaskModal = false;
      state.newBoardModal = false;
      state.newColumnModal = false;
      state.newTaskModal = false;
    }
  }
});

export const {
  editBoard,
  editTask,
  newBoard,
  newColumn,
  newTask,
  hideModal
} = modalSlice.actions;

export default modalSlice.reducer;