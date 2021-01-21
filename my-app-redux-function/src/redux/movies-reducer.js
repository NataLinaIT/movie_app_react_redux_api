import CallApi from "../api/api";

const GET_MOVIES = "GET_MOVIES";
const REMOVE_MOVIE = "REMOVE_MOVIE";

let initialState = {
  movies: [],
  total_pages: 0,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.movies,
        total_pages: action.total_pages,
      };
    }
    case REMOVE_MOVIE: {
      const updateMovies = state.movies.filter(function (item) {
        return item.id !== action.movie.id;
      });
      return {
        ...state,
        movies: updateMovies,
      };
    }
    default:
      return state;
  }
};

export const setMovies = (movies, total_pages) => ({
  type: GET_MOVIES,
  movies,
  total_pages,
});
export const removeMovieItem = (movie) => ({
  type: REMOVE_MOVIE,
  movie,
});

//thunk
export const getMovies = (sort_by, primary_release_year, with_genres, page) => (
  dispatch
) => {
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
    dispatch(setMovies(data.results, data.total_pages));
  });
};

export const removeMovie = (movie) => (dispatch) => {
  dispatch(removeMovieItem(movie));
};

export default moviesReducer;
