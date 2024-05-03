import PopularMovieList from './PopularMovieList';
import '../styles/PopularMovies.css';

const PopularMoviesContainer = ({movies}) => {
    return (
        <div className="popular__movies--container">
        <ul className='popular__movies--list'>
        {movies.map((movie)=><PopularMovieList key={movie.id} movie={movie}/>)}
        </ul>
        </div>
    );
}

export default PopularMoviesContainer;