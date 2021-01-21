import React, { Component } from 'react'
import SortBy from "./SortBy"
import PrimaryReleaseYear from "./PrimaryReleaseYear"
import Genres from "./Genres"


export default class Filters extends Component {
  render() {
    const{
      filters: {sort_by, primary_release_year, with_genres},
      onChangeFilters,
      onChangeGenre
    } = this.props;

    return (
      <form className={`mb-3`}>
        <SortBy 
          sort_by={sort_by}
          onChangeFilters={onChangeFilters}
        />
        <PrimaryReleaseYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <Genres 
          with_genres={with_genres} 
          onChangeFilters={onChangeFilters}
          onChangeGenre={onChangeGenre}
        />
      </form>
    )
  }
}
