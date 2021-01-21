import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import filtersReducer from "./filters-reducer"
import moviesReducer from "./movies-reducer"
import authReducer from "./auth-reducer"
import moviepageReducer from "./moviepage-reduser"

let reducers = combineReducers({
  movieList: moviesReducer,
  movieFilters: filtersReducer,
  auth: authReducer,
  movie: moviepageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

export default store;
