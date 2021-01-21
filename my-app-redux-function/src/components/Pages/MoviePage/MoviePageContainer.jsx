import React, { Component } from 'react'
import { connect } from "react-redux";
import MoviePage from "./MoviePage"
import {getMovieItem} from "../../../redux/moviepage-reduser"

class MoviePageContainer extends Component {
  componentDidMount(){
    let movieId = this.props.match.params.id
    this.props.getMovieItem(movieId)
  }
  render() {
    return (
      <MoviePage movieItem={this.props.movieItem}/>
    )
  }
}

let mapStapeToProps = (state) => {
  return {
    movieItem: state.movie.movieItem,
  };
};

export default connect(mapStapeToProps, {
  getMovieItem
})(MoviePageContainer);
