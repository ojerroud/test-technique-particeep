import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
	name: "movie",
	initialState: [],
	reducers: {
		initMovies: (state, action) => {
			if (state.length) return;
			const newTask = action.payload;
			return newTask;
		},
		deleteMovie: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
		toggleLike: (state, action) => {
			const movie = state.find((item) => item.id === action.payload);
			movie.liked = !movie.liked;
		},
	},
});

export const initMovies = (arr) => {
	return {
		type: "movie/initMovies",
		payload: arr,
	};
};

export const deleteMovie = (id) => {
	return {
		type: "movie/deleteMovie",
		payload: id,
	};
};

export const toggleLike = (id) => {
	return {
		type: "movie/toggleLike",
		payload: id,
	};
};
