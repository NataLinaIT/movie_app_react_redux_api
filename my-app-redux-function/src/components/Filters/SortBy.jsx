import React  from 'react';

let SortBy = (props) => {
  
  let onChengeFilters = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    props.changeFilter({
      value, 
      name,
    });
  }

  return (
      <div className="form-group">
          <label htmlFor="sort_by"> Sort by: </label>
          <select 
            id="sort_by" 
            className="form-control" 
            name='sort_by'
            value={props.sort_by}
            onChange={onChengeFilters}
          >
            {props.sort_by_options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
    )
}

export default SortBy;