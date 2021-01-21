import React from "react";
import MovieItem from "./MovieItem";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div  key={movie.id}>
            <MovieItem
              movie={movie}
              removeMovie={props.removeMovie}
              addMovieToWishList={props.addMovieToWishList}
              removeMovieFromWishList={props.removeMovieFromWishList}
            />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
