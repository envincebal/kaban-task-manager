import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    editBoardModal: false,
    editTaskModal: false,
    newBoardModal: false,
    newColumnModal: false,
    newTaskModal: false,
    deleteBoardModal: false,
    deleteTaskModal: false,
    taskItemModal: false,
    taskMenuToggle: false,
    navMenuToggle: false
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
    deleteBoard: (state) => {
      state.deleteBoardModal = true;
    },
    deleteTask: (state) => {
      state.deleteTaskModal = true;
    },
    taskItem: (state) => {
      state.taskItemModal = true;
    },
    taskMenu: (state) => {
      state.taskMenuToggle = !state.taskMenuToggle;
    },
    navMenu: (state) => {
      state.navMenuToggle = !state.navMenuToggle;
    },
    hideModal: (state) => {
      state.editBoardModal = false;
      state.editTaskModal = false;
      state.newBoardModal = false;
      state.newColumnModal = false;
      state.newTaskModal = false;
      state.deleteBoardModal = false;
      state.deleteTaskModal = false;
      state.taskItemModal = false;
    }
  }
});

export const {
  editBoard,
  editTask,
  newBoard,
  newColumn,
  newTask,
  deleteBoard,
  deleteTask,
  hideModal,
  taskItem,
  taskMenu,
  navMenu

} = modalSlice.actions;

export default modalSlice.reducer;