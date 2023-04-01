import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		tasks: [],
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

		completeAllTasks: (state, action) => {
			state.tasks.forEach((task) => {
				task.completed = true;
			})
		},

		incompleteAllTasks: (state, action) => {
			state.tasks.forEach((task) => {
				task.completed = false;
			})
		},

    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

		setTasks: (state, action) => {
			state.tasks = action.payload;
		}
	},
});

export const { changeStatus, removeTask, deleteAllTasks, completeAllTasks, incompleteAllTasks, addTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
