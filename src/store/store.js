import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./reducers/category/categorySlice";
import { movieSlice } from "./reducers/movie/movieSlice";
import { paginationSlice } from "./reducers/pagination/paginationSlice";

export const store = configureStore({
	reducer: {
		movie: movieSlice.reducer,
		category: categorySlice.reducer,
		pagination: paginationSlice.reducer,
	},
});
