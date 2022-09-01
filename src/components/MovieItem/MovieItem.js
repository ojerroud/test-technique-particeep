import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/reducers/movie/movieSlice";
import Gauge from "./Gauge";
import IconToggle from "./IconToggle";
import "./MovieItem.css";

function MovieItem({ movie }) {
	const dispatch = useDispatch();

	return (
		<div className="card bg-dark">
			<div className="card-body">
				<p className="font-weight-bold">{movie.title}</p>
				<p>{movie.category}</p>
				<Gauge movie={movie} />
				<IconToggle liked={movie.liked} id={movie.id} />
				<button
					class="btn btn-danger"
					onClick={() => dispatch(deleteMovie(movie.id))}
				>
					supprimer
				</button>
			</div>
		</div>
	);
}

export default MovieItem;
