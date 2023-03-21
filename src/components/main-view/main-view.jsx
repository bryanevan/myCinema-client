import {useState} from "react";
import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            image: "https://pixabay.com/images/id-3265473/",
            director: "Christopher Nolan"
        },
        {
            id: 2,
            title: "The Prestige",
            image: "https://pixabay.com/images/id-233171/",
            director: "Christopher Nolan"
        },
        {
            id: 3,
            title: "Coco",
            image: "https://images.app.goo.gl/Jx5ymfdFqh7rP6U67",
            director: "Adrian Molina & Lee Unkrich"
        },
        ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
        
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
    