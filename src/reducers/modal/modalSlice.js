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
  reducers:{
    editBoardModal: (state) => {
      state.editBoardModal = !state.editBoardModal;
    },
    editTaskModal: (state) => {
      state.editTaskModal = !state.editTaskModal;
    },
    newBoardModal: (state) => {
      state.newBoardModal  = !state.newBoardModal;
    },
    newColumnModal: (state) => {
      state.newColumnModal = !state.newColumnModal;
    },
    newTaskModal: (state) => {
      state.newTaskModal = !state.newTaskModal;
    }
  }
});

export const {editBoardModal,
  editTaskModal,
  newBoardModal,
  newColumnModal,
  newTaskModal} = modalSlice.actions;

export default modalSlice.reducer;