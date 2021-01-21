import React, { Component } from 'react'
import { connect } from "react-redux";
import { changeFilter, getMovieGenres } from "../../redux/filters-reducer";
import { getMovies } from "../../redux/movies-reducer";
import SortBy from "./SortBy"
import PrimaryReleaseYear from "./PrimaryReleaseYear"
import Genres from "./Genres"

class FiltersContainer extends Component {
  componentDidUpdate(prevProps){
    if (this.props.page !== prevProps.page) {
      this.props.getMovies(
        this.props.sort_by,
        this.props.primary_release_year,
        this.props.with_genres,
        this.props.page,
      );
    } else{
      this.props.getMovies(
        this.props.sort_by,
        this.props.primary_release_year,
        this.props.with_genres,
        1
      );
    }
  }
  render() {
    const{
      sort_by,
      primary_release_year,
      with_genres,
      sort_by_options,
      year_options,
      changeFilter,
      genresList,
      getMovieGenres
    } = this.props;

    return (
      <form className={`mb-3`}>
        <SortBy 
          sort_by={sort_by}
          changeFilter={changeFilter}
          sort_by_options={sort_by_options}
        />
        <PrimaryReleaseYear
          primary_release_year={primary_release_year}
          changeFilter={changeFilter}
          options={year_options}
        />
        <Genres 
          with_genres={with_genres} 
          changeFilter={changeFilter}
          genresList={genresList}
          getMovieGenres={getMovieGenres}
        />
      </form>
    )
  }
}

let mapStapeToProps = (state) => {
  return {
    filters: state.movieFilters.filters,
    sort_by: state.movieFilters.filters[0].sort_by,
    primary_release_year: state.movieFilters.filters[1].primary_release_year,
    with_genres: state.movieFilters.filters[2].with_genres,
    sort_by_options: state.movieFilters.sort_by_options,
    year_options: state.movieFilters.year_options,
    genresList: state.movieFilters.genresList,
    page: state.movieFilters.page,
  };
};
 
export default connect(mapStapeToProps, {
  changeFilter,
  getMovieGenres,
  getMovies
})(FiltersContainer);
