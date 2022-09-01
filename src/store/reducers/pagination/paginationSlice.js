import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
	name: "pagination",
	initialState: {
		totalData: -1,
		pageSize: 4,
		pageIndex: 1,
		start: 1,
		end: 4,
	},
	reducers: {
		setTotalData: (state, action) => {
			state.totalData = action.payload;
			return state;
		},
		setOnChange: (state, action) => {
			state.pageSize = action.payload.pageSize;
			state.pageIndex = action.payload.page;
			return state;
		},
		setRange: (state, action) => {
			state.start = action.payload[0];
			state.end = action.payload[1];
			return state;
		},
		setPageIndex: (state, action) => {
			state.pageIndex = action.payload;
			if (state.pageIndex < 1) return 1;
			return state;
		},
	},
});

export const setTotalData = (int) => {
	return {
		type: "pagination/setTotalData",
		payload: int,
	};
};

export const setOnChange = (obj) => {
	return {
		type: "pagination/setOnChange",
		payload: obj,
	};
};

export const setRange = (arr) => {
	return {
		type: "pagination/setRange",
		payload: arr,
	};
};
export const setPageIndex = (int) => {
	console.log(int);
	return {
		type: "pagination/setPageIndex",
		payload: int,
	};
};
