import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UISelect from '../UIComponents/UISelect';


export default class PrimaryReleaseYear extends PureComponent {
  static propTypes = {
    primary_release_year: PropTypes.string,
    onChangeFilters: PropTypes.func,
  }
  static defaultProps = {
    options: [
     {
       label: "2020",
       value: "2020"
     },
     {
       label: "2019",
       value: "2019"
     },
     {
       label: "2018",
       value: "2018"
     },
     {
       label: "2017",
       value: "2017"
     },
     {
       label: "2016",
       value: "2016"
     },
     {
       label: "2015",
       value: "2015"
     },
   ]
 }
  render() {
    const {primary_release_year, onChangeFilters, options} = this.props;

    return (
      <UISelect
        id="primary_release_year"
        name="primary_release_year"
        value={primary_release_year}
        onChange={onChangeFilters}
        labelText="Year of release:"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </UISelect>
    )
  }
}
