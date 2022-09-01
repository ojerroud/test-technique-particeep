import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
	name: "category",
	initialState: [],
	reducers: {
		initCategories: (state, action) => {
			if (state.length) return;

			const newCategory = action.payload;
			state.push(...newCategory);
		},
		setCategories: (state, action) => {
			state = action.payload;
			return state;
		},
	},
});

export const initCategories = (arr) => {
	return {
		type: "category/initCategories",
		payload: arr,
	};
};

export const setCategories = (arr) => {
	return {
		type: "category/setCategories",
		payload: arr,
	};
};
