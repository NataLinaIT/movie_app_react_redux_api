import React from "react";
import CallApi from "../../api/api";

export default (Component) =>
  class MovieHOC extends React.Component {
    constructor() {
      super();
      this.state = {
        movies: [],
      };
    }

    getMovies = (filters, page) => {
      const { sort_by, primary_release_year, with_genres } = filters;
      const queryStroingParams = {
        sort_by,
        page,
        primary_release_year,
      };
      if (with_genres.length > 0) {
        queryStroingParams.with_genres = with_genres.join(",");
      }

      CallApi.get("/discover/movie", {
        params: queryStroingParams,
      }).then((data) => {
        this.setState({
          movies: data.results,
        });
        this.props.onChangePagination({
          page: this.props.page,
          total_pages: data.total_pages,
        });
      });
    };

    componentDidMount() {
      this.getMovies(this.props.filters, this.props.page);
    }

    componentDidUpdate(prevProps) {
      if (this.props.filters !== prevProps.filters) {
        this.props.onChangePagination({
          page: 1,
        });
        this.getMovies(this.props.filters, 1);
      }
      if (this.props.page !== prevProps.page) {
        this.getMovies(this.props.filters, this.props.page);
      }
    }

    removeMovie = (movie) => {
      const updateMovies = this.state.movies.filter(function (item) {
        return item.id !== movie.id;
      });
      this.setState({
        movies: updateMovies,
      });
    };

    updateSortBy = (value) => {
      this.setState({
        sort_by: value,
      });
    };

    render() {
      const { movies } = this.state;
      const { wishList , addMovieToWishList, removeMovieFromWishList } = this.props;
      return (
        <Component
          movies={movies}
          wishList={wishList.length}
          removeMovie={this.removeMovie}
          addMovieToWishList={addMovieToWishList}
          removeMovieFromWishList={removeMovieFromWishList}
        />
      );
    }
  };
