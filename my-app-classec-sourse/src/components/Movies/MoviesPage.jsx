import React from "react";
import MovieList from "./MovieList";
import Filters from "../Filters/Filters";
import Pagination from "../../components/UIComponents/Pagination";
import WishList from "./WishList"
import style from "./MoviesPage.module.css"


class MoviesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      wishList: [],
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "2020",
        with_genres: [],
      },
      page: 1,
      total_pages: 0,
    };
  }

  addMovieToWishList = (movie) => {
    const updateMoviesWishList = [...this.state.wishList, movie];

    this.setState({
      wishList: updateMoviesWishList,
    });
  };

  removeMovieFromWishList = (movie) => {
    const updateMoviesWishList = this.state.wishList.filter((item) =>  item.id !== movie.id);

    this.setState({
      wishList: updateMoviesWishList,
    })
  };

  onChangeFilters = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      },
      page: 1,
    }));
  };

  onChangePagination = ({ page, total_pages = this.state.total_pages }) => {
    this.setState({
      page,
      total_pages,
    });
  };

  render() {
    const { filters, page, total_pages, wishList } = this.state;
    return (
      <div className="container-fluid">
        <WishList wishList={wishList.length}/>
        <div className="row mt-4">
          <div className={`${style.filters_form} col-3"`}>
            <div className="card">
              <div className="card-body">
                <h3>Filters</h3>
                <Filters
                  page={page}
                  total_pages={total_pages}
                  filters={filters}
                  onChangeFilters={this.onChangeFilters}
                  onChangePagination={this.onChangePagination}
                  onChangeGenre={this.onChangeGenre}
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <MovieList
              page={page}
              filters={filters}
              onChangePagination={this.onChangePagination}
              wishList={wishList}
              addMovieToWishList={this.addMovieToWishList}
              removeMovieFromWishList={this.removeMovieFromWishList}
            />
          </div>
        </div>
        <Pagination
          page={page}
          total_pages={total_pages}
          onChangePagination={this.onChangePagination}
        />
      </div>
    );
  }
}

export default MoviesPage;
