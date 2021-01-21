import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SortBy extends Component {
  static propTypes = {
    sort_by: PropTypes.string,
    onChangeFilter: PropTypes.func,
  }
  static defaultProps = {
     options: [
      {
        label: "Popularity descending",
        value: "popularity.desc",
        image: "/lol.jpg"
      },
      {
        label: "Popularity ascending",
        value: "popularity.asc"
      },
      {
        label: "Rating descending",
        value: "vote_average.desc"
      },
      {
        label: "Rating ascending",
        value: "vote_average.asc"
      },
    ]
  }
  render() {
    const {sort_by, onChangeFilters, options} = this.props;
    return (
      <div className="form-group">
          <label htmlFor="sort_by"> Sort by: </label>
          <select 
            id="sort_by" 
            className="form-control" 
            name='sort_by'
            value={sort_by}
            onChange={onChangeFilters}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
    )
  }
}
