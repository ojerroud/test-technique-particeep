import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/reducers/category/categorySlice";
import "antd/dist/antd.min.css";
import "./MovieHeader.css";

const createOptions = (arr) => {
	const { Option } = Select;

	return arr.map((category) => <Option key={category}>{category}</Option>);
};

function MultiSelectComponent() {
	const dispatch = useDispatch();

	const category = useSelector((state) => state.category);
	const moviesStore = useSelector((state) => state.movie);

	const [initCategory, setInit] = useState(false);
	const [children, setChildren] = useState([]);

	useEffect(() => {
		const tempCategory = [
			...new Set(moviesStore.map((movie) => movie.category)),
		];

		if (!initCategory && moviesStore.length) {
			setInit(true);
			dispatch(setCategories(tempCategory));
		} else {
			dispatch(
				setCategories(tempCategory.filter((movie) => category.includes(movie)))
			);
		}

		setChildren(createOptions(tempCategory));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesStore]);

	const handleChange = (value) => {
		dispatch(setCategories(value));
	};

	return (
		<>
			{initCategory && (
				<Select
					mode="multiple"
					allowClear
					style={{ width: "75%" }}
					placeholder="Please select categories"
					defaultValue={category}
					onChange={(value) => handleChange(value)}
				>
					{children}
				</Select>
			)}
		</>
	);
}

export default MultiSelectComponent;
