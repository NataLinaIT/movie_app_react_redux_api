import React from "react";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";
import MovieHOC from "./MovieHOC";

const MovieList = (props) => {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {props.movies.map((movie) => {
                return (
                  <div className="col-3 mb-2 lg-3" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={props.removeMovie}
                      addMovieToWishList={props.addMovieToWishList}
                      removeMovieFromWishList={props.removeMovieFromWishList}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

MovieList.defaultProps = {
  movies: []
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieHOC(MovieList);