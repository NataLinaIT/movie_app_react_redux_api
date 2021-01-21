import updateFiltersHelper from "./helper/updateFiltersHelper";
import { filtersApi } from "../api/api";

const SORT_BY = "SORT_BY";
const SET_MOVIE_GENRES = "SET_MOVIE_GENRES";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

let initialState = {
  filters: [
    { sort_by: "popularity.desc" },
    { primary_release_year: "2020" },
    { with_genres: [] },
  ],
  sort_by_options: [
    {
      label: "Popularity descending",
      value: "popularity.desc",
    },
    {
      label: "Popularity ascending",
      value: "popularity.asc",
    },
    {
      label: "Rating descending",
      value: "vote_average.desc",
    },
    {
      label: "Rating ascending",
      value: "vote_average.asc",
    },
  ],
  year_options: [
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2019",
      value: "2019",
    },
    {
      label: "2018",
      value: "2018",
    },
    {
      label: "2017",
      value: "2017",
    },
    {
      label: "2016",
      value: "2016",
    },
    {
      label: "2015",
      value: "2015",
    },
  ],
  genresList: [],
  page: 1,
  wishList: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY: {
      return {
        ...state,
        filters: updateFiltersHelper(
          state.filters,
          action.params.name,
          action.params.value
        ),
        page: 1,
      };
    }
    case SET_MOVIE_GENRES: {
      return {
        ...state,
        genresList: action.list,
      };
    }
    case SET_ACTIVE_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case ADD_TO_WISH_LIST: {
      const updateWishList = [...state.wishList, action.movie];
      return {
        ...state,
        wishList: updateWishList,
      };
    }
    case REMOVE_FROM_WISH_LIST: {
      const updateWishList = state.wishList.filter(
        (item) => item.id !== action.movie.id
      );
      return {
        ...state,
        wishList: updateWishList,
      };
    }
    default:
      return state;
  }
};

export const setFilter = (params) => ({
  type: SORT_BY,
  params,
});
export const setMovieGenres = (list) => ({
  type: SET_MOVIE_GENRES,
  list,
});
export const setActivePage = (page) => ({
  type: SET_ACTIVE_PAGE,
  page,
});
export const addToWishList = (movie) => ({
  type: ADD_TO_WISH_LIST,
  movie,
});
export const removeFromWishList = (movie) => ({
  type: REMOVE_FROM_WISH_LIST,
  movie,
});

//thunk
export const changeFilter = (params) => (dispatch) => {
  dispatch(setFilter(params));
};

export const getMovieGenres = () => async (dispatch) => {
  const response = await filtersApi.getGenres();
  dispatch(setMovieGenres(response.genres));
};

export const updatePage = (page) => (dispatch) => {
  dispatch(setActivePage(page));
};

export const addMovieToWishList = (movie) => (dispatch) => {
  dispatch(addToWishList(movie));
};

export const removeMovieFromWishList = (movie) => (dispatch) => {
  dispatch(removeFromWishList(movie));
};

export default filtersReducer;
