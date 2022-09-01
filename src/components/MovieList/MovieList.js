import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movies$ } from "../../api/movies";
import { initCategories } from "../../store/reducers/category/categorySlice";
import { initMovies } from "../../store/reducers/movie/movieSlice";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

const MoviesList = () => {
	const dispatch = useDispatch();

	const category = useSelector((state) => state.category);
	const moviesStore = useSelector((state) => state.movie);
	const { start, end } = useSelector((state) => state.pagination);

	useEffect(() => {
		try {
			movies$.then((res) => {
				const movies = res.map((movie) => {
					return { ...movie, liked: true };
				});

				dispatch(initMovies(movies));
			});
		} catch (error) {
			console.error(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const categories = [...new Set(moviesStore.map((movie) => movie.category))];

		const filtredCategory = categories.filter((movie) =>
			category.includes(movie)
		);

		dispatch(initCategories(filtredCategory));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesStore]);

	return (
		<div className="body">
			{moviesStore
				.filter((movie) => category.includes(movie.category))
				.slice(start - 1, end)
				.map((movie) => (
					<MovieItem key={movie.id} movie={movie} />
				))}
		</div>
	);
};

export default MoviesList;
