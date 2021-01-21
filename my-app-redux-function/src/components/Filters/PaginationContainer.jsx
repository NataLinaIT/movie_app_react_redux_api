import React from "react";
import { connect } from "react-redux";
import Pagination from "../UIComponents/Pagination";
import { updatePage } from "../../redux/filters-reducer";

let PaginationContainer = (props) => {
  let nextPage = () => {
    let newPageNumber = props.page + 1;
    props.updatePage(newPageNumber);
  };

  let prevPage = () => {
    let newPageNumber = props.page - 1;
    props.updatePage(newPageNumber);
  };

  return (
    <Pagination
      page={props.page}
      total_pages={props.total_pages}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};

let mapStapeToProps = (state) => {
  return {
    page: state.movieFilters.page,
    total_pages: state.movieList.total_pages,
  };
};

export default connect(mapStapeToProps, {
  updatePage,
})(PaginationContainer);
