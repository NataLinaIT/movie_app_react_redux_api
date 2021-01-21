import React from "react";

class Genres extends React.Component {

  componentDidMount() {
    this.props.getMovieGenres();
  }

  onChange = event => {
    this.props.changeFilter({
        name: "with_genres",
        value: event.target.checked
          ? [...this.props.with_genres, event.target.value]
          : this.props.with_genres.filter(genre => genre !== event.target.value)
    });
  };

  resetGenres = () => {
    this.props.changeFilter({
        name: "with_genres",
        value: []
    });
  };

  render() {
    const { with_genres, genresList } = this.props;
    return (
      <React.Fragment>
        <div className="form-check-wrapper">
          <h6>Genres:</h6>
          {genresList.map(genre => (
            <div key={genre.id} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={genre.id}
                id={`genre${genre.id}`}
                onChange={this.onChange}
                checked={with_genres.includes(String(genre.id))}
                
              />
              <label className="form-check-label" htmlFor={`genre${genre.id}`}>
                {genre.name}
              </label>
            </div>
          ))}
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-dark mb-2"
            onClick={this.resetGenres}
          >
            Show all genres
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Genres;