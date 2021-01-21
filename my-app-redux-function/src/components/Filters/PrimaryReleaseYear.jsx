import React from 'react';
import UISelect from '../UIComponents/UISelect';

let PrimaryReleaseYear = (props) => {

  let onChengeFilters = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    props.changeFilter({
      value, 
      name,
    });
  }

  return (
      <UISelect
        id="primary_release_year"
        name="primary_release_year"
        value={props.primary_release_year}
        onChange={onChengeFilters}
        labelText="Year of release:"
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </UISelect>
    )
}

export default PrimaryReleaseYear;