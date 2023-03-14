import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialTasks = [
	{
		title: 'Finish JavaScript lab',
		id: uuid(),
		complete: false,
	},
	{
		title: 'Create Loom video',
		id: uuid(),
		complete: false,
	},
	{
		title: 'Submit to FOL Dropbox',
		id: uuid(),
		complete: false,
	},
];

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		tasks: initialTasks,
	},
	reducers: {
		changeStatus: (state, action) => {
			const id = action.payload;
			state.tasks.forEach((task) => {
				if (task.id === id) {
					task.completed = task.completed ? false : true;
				}
			});
		},

		removeTask: (state, action) => {
			const id = action.payload;
			let updatedTasks = [...state.tasks];
			updatedTasks = updatedTasks.filter(function (task) {
				return task.id !== id;
			});
			state.tasks = updatedTasks;
		},

		deleteAllTasks: (state, action) => {
			state.tasks = [];
		},

    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        title: action.payload.title,
        completed: action.payload.completed,
      }
      state.tasks.push(newTask);
    }

      // const handleNewTask = (title, completed) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks.push({
  //     id: uuid(),
  //     title,
  //     completed,
  //   });
  //   setTasks(updatedTasks);
  // };
	},
});

export const { changeStatus, removeTask, deleteAllTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;
