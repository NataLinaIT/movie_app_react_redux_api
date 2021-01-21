import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false,
    };
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWishList,
      removeMovieFromWishList,
    } = this.props;
    const imagePath = movie.backdrop_path || movie.poster_path;
    return (
      <div className={`${style.movie_card} card`} style={{ width: "100%" }}>
        <img
          className={`card-img-top ${style.card_img__height}`}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${imagePath}`
              : ""
          }
          alt="movie_image"
        />
        <div className="card-body">
          <div className={style.rating}>{movie.vote_average}</div>
          <Link className={style.card_title} to={`/movie/${movie.id}`}>
            {movie.title}
          </Link>
          <div className={style.buttons_wrapper}>
            <div className="d-flex justify-content-between align-items-center">
              {this.state.willWatch ? (
                <button
                  type="button"
                  className={`btn ${style.btn_remove}`}
                  onClick={() => {
                    this.setState({ willWatch: false });
                    removeMovieFromWishList(movie);
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      willWatch: true,
                    });
                    addMovieToWishList(movie);
                  }}
                >
                  Watch
                </button>
              )}
            </div>
            <button className={style.delete_btn} onClick={removeMovie.bind(null, movie)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
