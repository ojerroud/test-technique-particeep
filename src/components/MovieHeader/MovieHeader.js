import React from "react";
import MultiSelectComponent from "./MultiSelectComponent";
import "antd/dist/antd.min.css";
import "./MovieHeader.css";
import PaginationComponent from "./PaginationComponent";

function MoviesHeader() {
	return (
		<div className="header d-flex flex-column align-items-center p-1 ">
			<MultiSelectComponent />
			<PaginationComponent />
		</div>
	);
}

export default MoviesHeader;
