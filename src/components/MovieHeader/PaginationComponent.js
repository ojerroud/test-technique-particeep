import React, { useEffect } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
	setTotalData,
	setOnChange,
	setRange,
	setPageIndex,
} from "../../store/reducers/pagination/paginationSlice";
import "antd/dist/antd.min.css";
import "./MovieHeader.css";

function PaginationComponent() {
	const dispatch = useDispatch();

	const moviesStore = useSelector((state) => state.movie);
	const category = useSelector((state) => state.category);
	const { totalData, pageSize, pageIndex } = useSelector(
		(state) => state.pagination
	);

	// get prev index when all datas get deleted from: last page > 1
	const getNewPageIndex = () => {
		const quotien = totalData / pageSize;
		const rest = totalData % pageSize;

		if (quotien < pageIndex && !rest && pageIndex !== 1)
			dispatch(setPageIndex(quotien));
	};

	useEffect(() => {
		if (!category.length || !moviesStore.length) return;

		const length = moviesStore.filter((movie) =>
			category.includes(movie.category)
		).length;

		dispatch(setTotalData(length));

		getNewPageIndex();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, moviesStore]);

	const test = (range) => {
		dispatch(setRange(range));
	};

	return (
		<>
			<Pagination
				className="mt-4"
				defaultCurrent={1}
				total={totalData}
				current={pageIndex}
				showTotal={(total, range) => test(range)}
				showSizeChanger
				pageSizeOptions={[4, 8, 12]}
				defaultPageSize={pageSize}
				onChange={(page, pageSize) => dispatch(setOnChange({ page, pageSize }))}
			/>
		</>
	);
}

export default PaginationComponent;
