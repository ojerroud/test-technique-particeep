import "./App.css";
import { Provider } from "react-redux";
import MoviesHeader from "../components/MovieHeader/MovieHeader";
import MoviesList from "../components/MovieList/MovieList";
import { store } from "../store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="container-fluid">
				<MoviesHeader />
				<MoviesList />
			</div>
		</Provider>
	);
}

export default App;
