import React from "react";

function Gauge({ movie }) {
	return (
		<div className="gauge">
			<div
				className="gauge_likes"
				style={{
					width: `${(movie.likes / (movie.likes + movie.dislikes)) * 100}%`,
				}}
			></div>
		</div>
	);
}

export default Gauge;
