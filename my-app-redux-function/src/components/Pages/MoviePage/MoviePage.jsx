import React from "react";
import { Link } from "react-router-dom";
import style from "./MoviePage.module.css";

let MoviePage = (props) => {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
    spoken_languages,
    production_countries,
  } = props.movieItem;

  return (
    <div>
      <div className={style.back_link}>
        <Link to="/">Back to main page</Link>
      </div>
      <div>
        <div className={style.bg_banner_wrapper}>
          <div className={style.bg_banner}>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt="banner"
            />
          </div>
        </div>

        <div className={style.description_wrapper}>
          <div className={style.movie_image}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="main_image"
            />
          </div>

          <div className={style.description}>
            <div className={style.flex_string}>
              <h1>{title}</h1>
              <p>({release_date ? release_date.slice(0, 4) : null})</p>
            </div>

            <ul className="genres">
              {genres
                ? genres.map((item) => {
                    return (
                      <li key={item.name}>
                        {item.name} <span></span>
                      </li>
                    );
                  })
                : null}
              <li className={style.runtime}>{runtime}m</li>
            </ul>

            <div className={style.flex_string}>
              <div className={style.score_wrapper}>
                <div className={style.rating}>{vote_average}</div>
                <p>Users score</p>
              </div>
              <div className={style.tools_wrapper}>
                <div
                  className={`${style.add_to_wishlist} ${style.circle}`}
                  title="Add to list"
                >
                  <i class="fas fa-list"></i>
                </div>
                <div
                  className={`${style.add_to_wishlist} ${style.circle}`}
                  title="Mark as favorite"
                >
                  <i className="fas fa-heart"></i>
                </div>
                <div
                  className={`${style.add_to_wishlist} ${style.circle}`}
                  title="Add to you watch list"
                >
                  <i className="fas fa-bookmark"></i>
                </div>
                <div
                  className={`${style.add_to_wishlist} ${style.circle}`}
                  title="Rate it!"
                >
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            <p className={style.tagline}>{tagline}</p>
            <h3>Overview</h3>
            <p className={style.overview}>{overview}</p>

            <div className={style.flex_string}>
              <div className={style.language_wraper}>
                <span className={style.nbsp}>Language: </span>{" "}
                <span>
                  {" "}
                  {spoken_languages
                    ? spoken_languages.map((item) => item.name)
                    : null}
                </span>
              </div>

              <div className={style.production_countries}>
                <span className={style.nbsp}>Countrie: </span>{" "}
                <span>
                  {production_countries
                    ? production_countries.map((item) => item.name)
                    : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
