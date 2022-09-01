import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../store/reducers/movie/movieSlice";

function IconToggle({ liked, id }) {
	const dispatch = useDispatch();

	return (
		<div
			className="iconContainer d-flex"
			onClick={() => dispatch(toggleLike(id))}
		>
			<i class={`iconLike fa-solid fa-thumbs-${liked ? "up" : "down"} mr-1`} />
			<p
				style={{
					color: liked ? "rgb(78, 131, 238)" : "rgb(255, 107, 77)",
				}}
			>
				{liked ? "like" : "dislike"}
			</p>
		</div>
	);
}

export default IconToggle;
