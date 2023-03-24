import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.title}
      </div>
    );
  };
  
  MovieCard.propTypes = {
    movie: PropTypes.shape({
        Genre: PropTypes.string,
        Director: PropTypes.string,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired, onMovieClick: PropTypes.func.isRequired
  };


//   return (
//     <div className="col">
//       <h1>Mi Casa</h1>
//       <p>This is my house y&apos;all!</p>
//       {homes.map(home => <div>{home.name}</div>)}
//     </div>
//   );