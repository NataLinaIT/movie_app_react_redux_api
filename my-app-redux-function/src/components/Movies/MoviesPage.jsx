import React from "react";
import style from "./MoviesPage.module.css";
import MovieListContainer from "./MovieListContainer";
import FiltersContainer from "../Filters/FiltersContainer";
import PaginationContainer from "../Filters/PaginationContainer";
import WishListContainer from "../WishList/WishListContainer";
import Burger from "../UIComponents/Burger";

let MoviesPage = () => {
    return (
      <div className="container-fluid" style={{padding: "0 40px"}}>
        <div className={`${style.tools_wrapper} d-flex justify-content-between`} >
          <Burger/>
          <WishListContainer />
        </div>
        <div className="d-flex justify-content-between flex-nowrap">
          <div className={`${style.filters_form} col-lg-3"`}>
            <div className="card">
              <div className="card-body">
                <h3>Filters</h3>
                <FiltersContainer/>
              </div>
            </div>
          </div>
          <div className={style.movies_container} >
            <MovieListContainer/>
          </div>
        </div>
        <PaginationContainer/>
      </div>
    );
}

export default MoviesPage;
