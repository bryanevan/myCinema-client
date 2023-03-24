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
        
      director: PropTypes.shape({
          Name: PropTypes.string.isRequired,
        }),
      genre: PropTypes.shape({
        Name: PropTypes.string.isRequired
      }),
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired, onMovieClick: PropTypes.func.isRequired
  };