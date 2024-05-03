import { useState, useEffect } from "react"
import getPopularMovies from "../services/movies";
import PopularMoviesContainer from "./assets/components/PopularMovies";
import Footer from "./assets/components/Footer";


function App() {
  // Estado para guardar las peliculas
const [movies, setMovies] = useState([]);
let [page, setPage] = useState(1);



useEffect(() => {
  getPopularMovies({page}).then((response) => {
    setMovies(response.data.results)
  })
}, [page])

// Evento del btn siguiente de la paginacion
const handleNext = () =>{
  if(page < 1000){
  setPage(page +=1) ;
  <PopularMoviesContainer movies={movies}/>   
}
}
// Evento del btn anterior de la paginacion
const handlePrevious = () =>{
  if(page > 1){
      setPage(page -= 1);
      <PopularMoviesContainer movies={movies} />
  }
}
  return (
    <>
    <h2>Peliculas populares</h2>
     <PopularMoviesContainer movies={movies} />
     <Footer handleNext={handleNext} handlePrevious={handlePrevious} />
    </>
  )
}

export default App
