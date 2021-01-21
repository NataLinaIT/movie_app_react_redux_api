import CallApi from "../api/api";

const SET_MOVIE_ITEM = "SET_MOVIE_ITEM";

let initialState = {
  movieItem: [],
};

const moviepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_ITEM: {
      return {
        ...state,
        movieItem: action.item,
      };
    }

    default:
      return state;
  }
};

export const setMovieItem = (item) => ({
  type: SET_MOVIE_ITEM,
  item,
});

//thunk
export const getMovieItem = (movieId) => (dispatch) => {
  CallApi.get(`/movie/${movieId}`).then((data) =>
    dispatch(setMovieItem(data))
  );
};

export default moviepageReducer;
