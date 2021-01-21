import React from "react";
import { connect } from "react-redux";
import { changeFilter,  addMovieToWishList, removeMovieFromWishList } from "../../redux/filters-reducer";
import { getMovies, removeMovie } from "../../redux/movies-reducer";
import MovieList from "./MovieList";

class MovieListContainer extends React.Component {
  componentDidMount() {
    this.props.getMovies(
      this.props.sort_by,
      this.props.primary_release_year,
      this.props.with_genres,
      this.props.page,
    );
  }

  render() {
    const {
      movies,
      removeMovie,
      addMovieToWishList,
      removeMovieFromWishList,
    } = this.props;
    return (
      <MovieList
        movies={movies}
        removeMovie={removeMovie}
        addMovieToWishList={addMovieToWishList}
        removeMovieFromWishList={removeMovieFromWishList}
      />
    );
  }
}

let mapStapeToProps = (state) => {
  return {
    movies: state.movieList.movies,
    sort_by: state.movieFilters.filters[0].sort_by,
    with_genres: state.movieFilters.filters[2].with_genres,
    primary_release_year: state.movieFilters.filters[1].primary_release_year,
  };
};

export default connect(mapStapeToProps, {
  changeFilter,
  getMovies,
  removeMovie,
  addMovieToWishList,
  removeMovieFromWishList
})(MovieListContainer);
