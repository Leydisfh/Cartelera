

const PopularMovieList = ({movie}) =>{
    return(
        <li className='popular__movies--item' >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
            </li>
    )
}

export default PopularMovieList;