import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";

let MovieItem = (props) => {
  const [wishListStatus, setWishListStatus] = useState(false);

  let onRemoveMovie = (movie) => {
    setWishListStatus(false);
    props.removeMovieFromWishList(movie);
  };
  let onAddMovie = (movie) => {
    setWishListStatus(true);
    props.addMovieToWishList(movie);
  };

  const imagePath = props.movie.backdrop_path || props.movie.poster_path;
  return (
    <div className={`${style.movie_card} card`} style={{ width: "100%" }}>
      <img
        className={`card-img-top ${style.card_img__height}`}
        src={
          props.movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${imagePath}`
            : ""
        }
        alt="movie_image"
      />
      <div className="card-body">
        <div className={style.rating}>{props.movie.vote_average}</div>
        <Link className={style.card_title} to={`/movie/${props.movie.id}`}>
          {props.movie.title}
        </Link>
        <div className={style.buttons_wrapper}>
          <div className="d-flex justify-content-between align-items-center">
            {wishListStatus ? (
              <button
                type="button"
                className={`btn ${style.btn_remove}`}
                onClick={() => onRemoveMovie(props.movie)}
              >
                Remove
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onAddMovie(props.movie)}
              >
                Watch
              </button>
            )}
          </div>
          <button
            className={style.delete_btn}
            onClick={props.removeMovie.bind(null, props.movie)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
