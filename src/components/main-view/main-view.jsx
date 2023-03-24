import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://mycinema.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
            const moviesFromApi = data.map((movie) => {
                const obj = {id: movie._id, 
                            title: movie.Title, 
                            image: movie.imageUrl,
                            director: movie.Director.Name, 
                            genre: movie.Genre.Name,
                            description: movie.Description}
                return obj;
            });
            setMovies(moviesFromApi);
        });
    },[]);
        
    if (selectedMovie) {
        return (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
      }
    
      if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }
    
      return (
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </div>
      );
    };