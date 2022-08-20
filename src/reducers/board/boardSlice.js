import {createSlice,current} from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
    activeBoard: null,
    activeColumn: null,
    activeTask: null
  },
  reducers: {
    setActiveBoard: (state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === payload);
      state.activeBoard = getBoardByID;
    },
    setActiveTask: (state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      const getColumnByID = getBoardByID.columns.find(el => el.id === payload.columnID);
      const getTaskID = getColumnByID.tasks.find(el => el.id === payload.taskID);
      state.activeColumn = getColumnByID;
      state.activeTask = getTaskID;
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
      const getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);

      getBoardByID.name = payload.boardName;
      getBoardByID.columns = payload.columns;

      state.activeBoard = getBoardByID;
    },
    editTask:(state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      const getColumnByID = getBoardByID.columns.find(el => el.id === state.activeColumn.id);
      const getTaskID = getColumnByID.tasks.find(el => el.id === state.activeTask.id);

      getTaskID.title = payload.title;
      getTaskID.description = payload.description;
      getTaskID.subTasks = payload.subTasks;
      state.activeBoard = getBoardByID;
    },
    deleteCurrentBoard: (state, {payload}) => {
      const deletedBoard = state.boards.filter(item => item.id !== state.activeBoard.id);

      state.boards = deletedBoard;

      state.activeBoard = state.boards[0];
    },
    addColumn: (state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      getBoardByID.columns.push(payload)

      state.activeBoard = getBoardByID;
    },
    addTask: (state, {payload}) => {
      const getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      const getColumnByID = getBoardByID.columns.find(el => el.id === payload.status);
      const newTask = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        subTasks: payload.subTasks
      }

      getColumnByID.tasks.push(newTask);
      state.activeBoard = getBoardByID;
    },
    moveTask: (state, {payload}) => {
      let getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      let currentColumnByID = getBoardByID.columns.find(el => el.id === state.activeColumn.id);
      let movedColumnByID = getBoardByID.columns.find(el => el.id === payload);
      let filteredTask = currentColumnByID.tasks.filter(el => el.id !== state.activeTask.id);

      state.activeColumn.tasks = filteredTask;
      currentColumnByID.tasks = filteredTask;
      movedColumnByID.tasks.push(state.activeTask); 
      state.activeBoard = getBoardByID;
    },
    deleteCurrentTask: (state, {payload}) => {
      let getBoardByID = state.boards.find(el => el.id === state.activeBoard.id);
      let getColumnByID = getBoardByID.columns.find(el => el.id === state.activeColumn.id);
      let filteredTask = state.activeColumn.tasks.filter(el => el.id !== state.activeTask.id);

      state.activeColumn.tasks = filteredTask;
      state.activeTask = null;
      getColumnByID.tasks = state.activeColumn.tasks;
      state.activeBoard = getBoardByID;

    }
  }
});

export const {
  addBoard,
  setActiveBoard,
  deleteCurrentBoard,
  addColumn,
  editBoard,
  editTask,
  addTask,
  setActiveTask,
  moveTask,
  deleteCurrentTask
} = boardSlice.actions;

export default boardSlice.reducer;